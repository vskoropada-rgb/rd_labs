# LAB №16. Terraform (AWS, модулі)


> На момент виконання лабораторної **AWS-акаунт відсутній**, тому робота виконана у вигляді:
> - повністю готової Terraform-структури
> - перевірки `terraform init / fmt / validate`
> Після додавання AWS-акаунта конфігурація готова до `apply` та `terraform import`.

---

## Структура проєкту

lab-16-terraform/
├── main.tf                # Основна конфігурація: підключення та використання модулів
├── providers.tf           # Провайдери та вимоги до версій Terraform
├── variables.tf           # Глобальні змінні проєкту
├── outputs.tf             # Публічні outputs інфраструктури
├── terraform.tfvars       # Значення змінних (середовище)
├── README.md              # Опис лабораторної
├── screenshots/           # Скриншоти перевірок (init/validate/plan)
└── modules/               # Повторно використовувані Terraform-модулі
    ├── vpc/               # Модуль VPC
    │   ├── main.tf        # Створення VPC
    │   ├── variables.tf   # Вхідні параметри модуля
    │   └── outputs.tf     # Вихідні значення (VPC ID)
    ├── subnet/            # Модуль підмереж
    │   ├── main.tf        # Public / Private subnet
    │   ├── variables.tf
    │   └── outputs.tf
    └── ec2/               # Модуль EC2
        ├── main.tf        # EC2 instance
        ├── variables.tf
        └── outputs.tf



