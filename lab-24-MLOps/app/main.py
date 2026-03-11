from fastapi import FastAPI
from pydantic import BaseModel

from app.gemini_client import ask_gemini
from app.ollama_client import ask_ollama

app = FastAPI()

class Question(BaseModel):
    question: str


@app.post("/ask")
async def ask_ai(q: Question, mode: str = "local"):

    if mode == "saas":
        answer = ask_gemini(q.question)

    else:
        answer = ask_ollama(q.question)

    return {"answer": answer}
