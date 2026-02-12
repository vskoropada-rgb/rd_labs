# LAB №18. AWS Basics

Регіон: eu-central-1 (Frankfurt)

---

# 1️ Створення VPC

Name: lab18-vpc
CIDR: 10.0.0.0/16

VPC створена з ручним CIDR-блоком.

---

# 2️ Створення підмереж

## Public subnet
Name: lab18-public-subnet 
CIDR: 10.0.1.0/24 
AZ: eu-central-1a 

## Private subnet
Name: lab18-private-subnet 
CIDR: 10.0.2.0/24 

---

# 3️ Internet Gateway

- Створено lab18-igw
- Прив’язано до lab18-vpc

---

# 4️ Route Table

Створено lab18-public-rt 

Маршрути:
- 10.0.0.0/16 → local
- 0.0.0.0/0 → Internet Gateway

Public subnet асоційована з цією таблицею.

---

# 5️ Security Group

Name: lab18-sg 

Inbound rules:
- SSH (22) → 0.0.0.0/0
- HTTP (80) → 0.0.0.0/0

Outbound:
- All traffic allowed

---

# 6️ Запуск EC2

Name: lab18-ec2 
AMI: Amazon Linux 2023 
Instance type: t3.micro 
Subnet: lab18-public-subnet 
Auto-assign Public IP: Enabled 
Security Group: lab18-sg 

---

# 7️ Elastic IP

Allocated new Elastic IP 
Associated with lab18-ec2 

Elastic IP: 18.199.58.130 

