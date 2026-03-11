import os
from google import genai

client = genai.Client(
    api_key=os.getenv("GOOGLE_API_KEY")
)

def ask_gemini(question: str):

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=f"""
You are a helpful customer support assistant.

Question: {question}

Answer clearly and shortly.
"""
    )

    return response.text
