# Lab 11: Docker Compose

## Опис
У цій лабораторній роботі було створено багатоконтейнерний застосунок
з використанням Docker Compose.

Застосунок складається з:
- nginx (web server)
- PostgreSQL (database)

## Використані команди
- docker compose up -d
- docker compose ps
- docker network ls
- docker volume ls
- docker exec -it <container_id> psql
- docker compose up -d --scale web=3

## Результат
- Вебсервер доступний на http://localhost:8080
- Дані PostgreSQL зберігаються у volume
- Web-сервіс успішно масштабовано до 3 контейнерів

## Проблеми та рішення
- Переконався, що використовується Docker Compose v2 (`docker compose`)
- Для збереження даних використано volume
