# Lab 11: Docker Compose

## Використане середовище
- ОС: Oracle Linux 9 (Virtual Machine)
- Docker Engine
- Docker Compose v2

---

## Архітектура застосунку

Застосунок складається з трьох сервісів:
- **nginx** — вебсервер
- **PostgreSQL** — база даних
- **Redis** — кеш

Сервіси обʼєднані у спільну Docker-мережу та
використовують volumes для збереження даних.

---

## Структура проєкту

```text
lab-11-docker-compose/
├── docker-compose.yml
├── web-data/
│   └── index.html
└── README.md


Використані команди

        •       docker compose up -d

Перевірка стану контейнерів
        •       docker compose ps

Перевірка мереж і томів
        •        docker network ls
        •        docker volume ls

Підключення до PostgreSQL
        •        docker exec -it db psql -U myuser -d mydb

Перевірка роботи вебсервера
Вебсервер nginx успішно запущений та доступний
через браузер за адресою: http://192.168.64.14:8080/

На сторінці відображається повідомлення: Hello from Docker!

Масштабування сервісів
docker compose up -d --scale web=3

Під час масштабування порти не публікувались,оскільки Docker не дозволяє використовувати один хост-порт для кількох контейнерів.
Масштабування виконувалось в межах внутрішньої Docker-мережі.

Проблеми та рішення
	•	Під час масштабування виникла помилка port is already allocated, яка була вирішена шляхом видалення публікації порту для web-сервісу.
	•	Для коректного відображення HTML-сторінки було використано bind mount замість named volume.
