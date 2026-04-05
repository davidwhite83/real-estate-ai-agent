import { ChatKit, useChatKit } from "@openai/chatkit-react";

function MyChat() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        const res = await fetch(
          "https://https://real-estate-ai-agent-backend.onrender.com/api/chatkit/session",

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
    <div style={{ height: "100%", width: "100%" }}>
      <ChatKit control={control} className="h-[600px] w-[100%]" />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MyChat />
    </div>
  );
}
