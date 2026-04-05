from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://real-estate-ai-agent-lac.vercel.app",
        "https://fictional-train-694jv799v4vwc9w9-5173.app.github.dev",
        "https://fictional-train-694jv799v4vwc9w9-5174.app.github.dev",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chatkit/session")
def create_chatkit_session():
    try:
        session = client.beta.chatkit.sessions.create(
            user="test-user-123",
            workflow={
    "id": os.getenv("WORKFLOW_ID")
},
        )
        return {"client_secret": session.client_secret}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))