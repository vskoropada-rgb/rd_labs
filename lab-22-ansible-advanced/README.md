# Lab 22 – Advanced Ansible

## Архітектура

Ansible → AWS EC2 → Ubuntu Server → Nginx

Уся конфігурація сервера виконується автоматично за допомогою ролей Ansible.

⸻
```text
lab-22-ansible-advanced
│
├── ansible.cfg
├── README.md
│
├── inventory
│   └── aws_ec2.yml
│
├── group_vars
│   └── all.yml
│
├── playbooks
│   ├── baseline.yml
│   ├── firewall.yml
│   └── nginx.yml
│
└── roles
    ├── baseline
    │   ├── defaults
    │   │   └── main.yml
    │   └── tasks
    │       └── main.yml
    │
    ├── firewall
    │   └── tasks
    │       └── main.yml
    │
    └── nginx
        ├── defaults
        │   └── main.yml
        ├── tasks
        │   └── main.yml
        └── templates
            └── index.html.j2
## Ролі

baseline

Виконує базове налаштування сервера:
	•	встановлює базові пакети
	•	vim
	•	git
	•	mc
	•	ufw
	•	додає SSH ключ для доступу

## firewall
Налаштовує firewall UFW:
	•	дозволяє SSH (порт 22)
	•	дозволяє HTTP (порт 80)
	•	активує firewall

## nginx
Встановлює та налаштовує веб-сервер Nginx:
	•	встановлює nginx
	•	розгортає index.html з шаблону
	•	запускає та додає nginx в автозапуск

## Шаблони
```text
roles/nginx/templates/index.html.j2
Використовуються змінні:
site_title
site_message

## Змінні
Змінні визначені у файлі:
group_vars/all.yml
site_title: "Ansible Nginx Server"
site_message: "Deployed with Ansible"

## Запуск playbook
Базове налаштування сервера:
ansible-playbook playbooks/baseline.yml
Налаштування firewall:
ansible-playbook playbooks/firewall.yml
Розгортання Nginx:
ansible-playbook playbooks/nginx.yml

## Результат
http://18.184.5.255/

Ansible Nginx Server
Deployed with Ansible
