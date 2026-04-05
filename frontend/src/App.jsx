import { ChatKit, useChatKit } from "@openai/chatkit-react";

function FeatureCard({ title, description }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "18px",
        padding: "16px",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#f9fafb",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "13px",
          lineHeight: 1.55,
          color: "#9ca3af",
        }}
      >
        {description}
      </div>
    </div>
  );
}

function PromptChip({ children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 14px",
        borderRadius: "999px",
        background: "rgba(16,185,129,0.10)",
        border: "1px solid rgba(16,185,129,0.22)",
        color: "#86efac",
        fontSize: "13px",
        fontWeight: 600,
      }}
    >
      {children}
    </div>
  );
}

function SidebarItem({ label }) {
  return (
    <div
      style={{
        padding: "12px 14px",
        borderRadius: "12px",
        color: "#d1d5db",
        fontSize: "14px",
        fontWeight: 500,
        cursor: "default",
      }}
    >
      {label}
    </div>
  );
}

function MyChat() {
  const { control } = useChatKit({
    api: {
      async getClientSecret() {
        const res = await fetch(
          "https://real-estate-ai-agent-backend.onrender.com/api/chatkit/session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Failed to fetch client secret: ${res.status} ${text}`);
        }

        const { client_secret } = await res.json();
        return client_secret;
      },
    },
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(16,185,129,0.10), transparent 28%), linear-gradient(180deg, #0b1220 0%, #0f172a 100%)",
        color: "#f9fafb",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "20px",
          }}
        >
          {/* SIDEBAR */}
          <aside
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "22px",
              minHeight: "calc(100vh - 40px)",
              boxSizing: "border-box",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ marginBottom: "28px" }}>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                }}
              >
                Compliance Assistant
              </div>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "#9ca3af",
                }}
              >
                Real-time decision support for real estate compliance and operations.
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "rgba(16,185,129,0.10)",
                border: "1px solid rgba(16,185,129,0.20)",
                color: "#86efac",
                fontSize: "12px",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              Real-time guidance
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#6b7280",
                  marginBottom: "10px",
                }}
              >
                Categories
              </div>
              <SidebarItem label="Sales obligations" />
              <SidebarItem label="AML/CTF checks" />
              <SidebarItem label="Property management" />
              <SidebarItem label="Legal compliance" />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#6b7280",
                  marginBottom: "10px",
                }}
              >
                Built for
              </div>
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#d1d5db",
                }}
              >
                Sales agents<br />
                Property managers<br />
                Agency principals<br />
                Compliance-focused professionals
              </div>
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "18px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                fontSize: "12px",
                lineHeight: 1.6,
                color: "#6b7280",
              }}
            >
              Guidance only. Always verify legal and compliance decisions where required.
            </div>
          </aside>

          {/* MAIN */}
          <main
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* TOP HERO */}
            <section
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "32px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "8px 12px",
                  borderRadius: "999px",
                  background: "rgba(16,185,129,0.10)",
                  border: "1px solid rgba(16,185,129,0.20)",
                  color: "#86efac",
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "18px",
                }}
              >
                AI-powered compliance engine
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: "52px",
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                  fontWeight: 800,
                  color: "#ffffff",
                  maxWidth: "760px",
                }}
              >
                Stay compliant. Make confident decisions.
              </h1>

              <p
                style={{
                  marginTop: "16px",
                  marginBottom: 0,
                  fontSize: "18px",
                  lineHeight: 1.7,
                  color: "#cbd5e1",
                  maxWidth: "760px",
                }}
              >
                Your real-time decision support system for real estate compliance,
                obligations, and operational guidance.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "22px",
                }}
              >
                <PromptChip>Sales obligations</PromptChip>
                <PromptChip>AML/CTF checks</PromptChip>
                <PromptChip>Property management guidance</PromptChip>
                <PromptChip>Legal compliance</PromptChip>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: "14px",
                  marginTop: "24px",
                }}
              >
                <FeatureCard
                  title="Sales"
                  description="Vendor obligations, negotiation support, disclosure requirements, and practical guidance."
                />
                <FeatureCard
                  title="AML/CTF"
                  description="Clarify onboarding obligations, risk checks, and evolving compliance expectations."
                />
                <FeatureCard
                  title="Property management"
                  description="Navigate notices, obligations, tenancy issues, and day-to-day compliance questions."
                />
                <FeatureCard
                  title="Legal compliance"
                  description="Reduce uncertainty with structured answers grounded in real estate obligations."
                />
              </div>
            </section>

            {/* CHAT PANEL */}
            <section
              style={{
                background: "#ffffff",
                border: "1px solid rgba(15,23,42,0.08)",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(2, 6, 23, 0.22)",
                height: "720px",
              }}
            >
              <ChatKit
                control={control}
                style={{ height: "100%", width: "100%" }}
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <MyChat />;
}