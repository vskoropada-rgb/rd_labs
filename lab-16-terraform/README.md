# LAB №16. Terraform (AWS, модулі)


> На момент виконання лабораторної **AWS-акаунт відсутній**, тому робота виконана у вигляді:
> - повністю готової Terraform-структури
> - перевірки `terraform init / fmt / validate`
> Після додавання AWS-акаунта конфігурація готова до `apply` та `terraform import`.

---

## Структура проєкту

```text
lab-16-terraform/
├── main.tf                # Основна конфігурація: збирання інфраструктури з модулів
├── providers.tf           # Провайдери (AWS) та вимоги до версії Terraform
├── variables.tf           # Глобальні змінні проєкту
├── outputs.tf             # Публічні outputs всієї інфраструктури
├── README.md              # Опис лабораторної роботи
├── screenshots/           # Скриншоти перевірок (init / validate / plan)
│
├── modules/               # Повторно використовувані Terraform-модулі
│   ├── vpc/
│   │   ├── main.tf        # Створення VPC
│   │   ├── variables.tf  # Вхідні параметри модуля VPC
│   │   └── outputs.tf    # Вихідні значення (VPC ID, CIDR)
│   │
│   ├── subnet/
│   │   ├── main.tf        # Public / Private subnet
│   │   ├── variables.tf
│   │   └── outputs.tf
│   │
│   └── ec2/
│       ├── main.tf        # EC2 instance
│       ├── variables.tf
│       └── outputs.tf





