import EarlyAccessForm from "@/emails/early-access-form";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Airtable from "airtable";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, whoIAm, workEmail, yourName } = body;

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID!,
    );

    if (!whoIAm || !workEmail || !companyName || !yourName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "streetopsng@gmail.com",
      subject: `New Early Access Form ${companyName}`,
      replyTo: workEmail,
      react: EarlyAccessForm({
        yourName,
        workEmail,
        companyName,
        whoIAm,
      }),
    });
    const record = await base("Waitlist").create({
      Name: yourName,
      "Company Name": companyName,
      "Work Email": workEmail,
      Role: whoIAm,
    });

    // console.log("response from resend", data, error);
    // console.log("record", record);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    // return NextResponse.json({ success: true });
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
