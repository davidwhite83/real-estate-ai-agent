import { ChatKit, useChatKit } from "@openai/chatkit-react";

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
        width: "100%",
        background: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "56px 24px 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#111827",
            margin: 0,
          }}
        >
          Stay compliant. Make confident decisions.
        </h1>

        <p
          style={{
            marginTop: "16px",
            fontSize: "18px",
            lineHeight: 1.6,
            color: "#4b5563",
            maxWidth: "720px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Your real-time decision support system for real estate compliance.
        </p>

        <div
          style={{
            marginTop: "22px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {[
            "Vendor obligations",
            "AML/CTF checks",
            "Negotiation guidance",
            "Legal compliance",
          ].map((item) => (
            <span
              key={item}
              style={{
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                color: "#065f46",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          maxWidth: "980px",
          width: "100%",
          margin: "0 auto",
          padding: "0 24px 32px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            height: "100%",
            minHeight: "620px",
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
          <ChatKit control={control} className="h-[620px] w-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <MyChat />;
}