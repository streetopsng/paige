import EarlyAccessForm from "@/emails/early-access-form";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, whoIAm, workEmail, yourName } = body;

    // const {
    //   fullName,
    //   email,
    //   companyName,
    //   phone,
    //   package: selectedPackage,
    //   description,
    // } = body;

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

    console.log("response from resend", data, error);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
