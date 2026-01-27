# LAB №15 — MongoDB (Gym Database)

---

##  Використані інструменти
- Oracle Linux 9
- MongoDB 7.x
- MongoDB Shell (mongosh)

---

## 📁 Структура лабораторної

lab-15-mongodb/
├── README.md
└── screenshot/

##  КРОК 1. Запуск MongoDB

Перевірка статусу сервісу:
```bash
sudo systemctl status mongod

Запуск Mongo shell:
mongosh

## КРОК 2. Створення бази даних
use gymDatabase
switched to db gymDatabase

## КРОК 3. Створення колекцій

db.createCollection("clients")
db.createCollection("memberships")
db.createCollection("workouts")
db.createCollection("trainers")

## КРОК 4. Заповнення колекцій даними

#Clients
db.clients.insertMany([
  { client_id: 1, name: "Ivan Petrenko", age: 35, email: "ivan@gmail.com" },
  { client_id: 2, name: "Olena Koval", age: 28, email: "olena@gmail.com" },
  { client_id: 3, name: "Andrii Shevchenko", age: 42, email: "andrii@gmail.com" }
])


#Memberships
db.memberships.insertMany([
  {
    membership_id: 101,
    client_id: 1,
    start_date: ISODate("2024-01-01"),
    end_date: ISODate("2024-12-31"),
    type: "Annual"
  },
  {
    membership_id: 102,
    client_id: 2,
    start_date: ISODate("2024-06-01"),
    end_date: ISODate("2024-09-01"),
    type: "Quarterly"
  },
  {
    membership_id: 103,
    client_id: 3,
    start_date: ISODate("2024-03-01"),
    end_date: ISODate("2025-03-01"),
    type: "Annual"
  }
])

#Workouts
db.workouts.insertMany([
  { workout_id: 1, description: "Cardio training", difficulty: "Medium" },
  { workout_id: 2, description: "Strength training", difficulty: "Hard" },
  { workout_id: 3, description: "Yoga session", difficulty: "Medium" }
])


#Trainers
db.trainers.insertMany([
  { trainer_id: 1, name: "Serhii Ivanov", specialization: "Cardio" },
  { trainer_id: 2, name: "Maria Bondar", specialization: "Yoga" },
  { trainer_id: 3, name: "Oleh Kravets", specialization: "Strength" }
])


## КРОК 5. Запити

Клієнти віком понад 30 років
db.clients.find({ age: { $gt: 30 } })

Тренування із середньою складністю
db.workouts.find({ difficulty: "Medium" })

Членство клієнта з client_id = 1
db.memberships.find({ client_id: 1 })

