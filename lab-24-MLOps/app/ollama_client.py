import requests

def ask_ollama(question: str):

    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "tinyllama",
                "prompt": f"""
You are a helpful customer support assistant.

Question: {question}

Answer clearly and shortly.
""",
                "stream": False
            },
            timeout=120
        )

        response.raise_for_status()

        data = response.json()

        return data.get("response", "No response from model")

    except Exception as e:
        return f"Ollama error: {str(e)}"
