import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

type BuildYourTeamProps = {
  yourName: string;
  workEmail: string;
  companyName: string;
  whoIAm: string;
};

export default function EarlyAccessForm({
  yourName,
  workEmail,
  companyName,
  whoIAm,
}: BuildYourTeamProps) {
  return (
    <Html>
      <Head />
      <Preview>New Build Your Team Request</Preview>

      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>Early access </Heading>
          <Text style={paragraph}>
            This message was sent from the early access form on your website.
          </Text>

          <Text style={paragraph}>
            You have received a new early access message
          </Text>

          <Section>
            <Text>
              <strong>Work Email</strong> {workEmail}
            </Text>

            <Text>
              <strong>Company Name:</strong> {companyName}
            </Text>
            <Text>
              <strong>Who I am:</strong> {whoIAm}
            </Text>
            <Text>
              <strong>Name</strong> {yourName}
            </Text>
          </Section>

          <Hr style={hr} />

          <Hr style={hr} />

          <Text style={footer}>This message was sent from paige.</Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ------------------ Helpers ------------------ */
function formatPackage(value: string) {
  return value.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

/* ------------------ Styles ------------------ */
const body = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "8px",
};

const heading = {
  fontSize: "22px",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "14px",
  color: "#333",
};

const label = {
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "6px",
};

const descriptionStyle = {
  fontSize: "14px",
  lineHeight: "1.6",
  backgroundColor: "#f9f9f9",
  padding: "12px",
  borderRadius: "6px",
};

const hr = {
  margin: "20px 0",
};

const footer = {
  fontSize: "12px",
  color: "#888",
};
