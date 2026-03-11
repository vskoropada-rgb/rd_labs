 №24 — MLOps

## Архітектура рішення

Client
   │
   ▼
FastAPI AI Service
   │
   ├── SaaS LLM
   │      └── Gemini API
   │
   └── Self-hosted LLM
          └── Ollama
               └── tinyllama

## Структура проєкту
lab-24-MLOps
│
├── app
│   ├── main.py
│   ├── gemini_client.py
│   └── ollama_client.py
│
├── Dockerfile
├── requirements.txt
└── README.md

## API Endpoint

POST /ask

Endpoint дозволяє користувачу поставити запитання AI-сервісу.

Приклад запиту

''text	
{
  "question": "How do I reset my password?"
}

Query параметр
mode=saas   (Gemini API)
mode=local  (Ollama)


Приклад виклику
POST /ask?mode=local

Приклад відповіді
{
  "answer": "To reset your password..."
}
## Встановлення Ollama

curl -fsSL https://ollama.com/install.sh | sh

## Завантаження локальної моделі
Для лабораторної використовується легка модель:
ollama pull tinyllama

Перевірка моделі: ollama run tinyllama

## Запуск FastAPI локально
Створення віртуального середовища:
python3 -m venv venv
source venv/bin/activate
Встановлення залежностей: pip install -r requirements.txt

Запуск API:
uvicorn app.main:app --host 0.0.0.0 --port 8000

## Запуск через Docker

Побудова контейнера
docker build -t ai-support-bot .

Запуск контейнера
docker run --network host \
-e GOOGLE_API_KEY=*******_API_KEY \
ai-support-bot

## Тестування API

Приклад запиту через curl:

curl -X POST "http://localhost:8000/ask?mode=local" \
-H "Content-Type: application/json" \
-d '{"question":"How do I reset my password?"}'

