Lab 22 – Advanced Ansible

-⸻

Архітектура

Ansible → AWS EC2 → Ubuntu Server → Nginx

Уся конфігурація сервера виконується автоматично за допомогою ролей Ansible.

⸻

Структура проєкту

lab-22-ansible-advanced

├── ansible.cfg
├── README.md
├── inventory
│   └── aws_ec2.yml
├── group_vars
│   └── all.yml
├── playbooks
│   ├── baseline.yml
│   ├── firewall.yml
│   └── nginx.yml
└── roles
├── baseline
│   ├── defaults
│   └── tasks
├── firewall 
│   └── tasks
└── nginx
    ├── defaults  
    ├── tasks  
    └── templates  
--
Ролі

baseline

Виконує базове налаштування сервера:
	•	встановлює базові пакети
	•	vim
	•	git
	•	mc
	•	ufw
	•	додає SSH ключ для доступу
--
firewall

Налаштовує firewall UFW:
	•	дозволяє доступ до SSH (22)
	•	дозволяє доступ до HTTP (80)
	•	вмикає firewall
--
nginx

Встановлює та налаштовує веб-сервер Nginx:
	•	встановлює nginx
	•	копіює веб-сторінку з шаблону
	•	запускає та додає сервіс nginx в автозапуск
--
Шаблони

Файл шаблону:

roles/nginx/templates/index.html.j2

У шаблоні використовуються змінні:

site_title
site_message
--
Змінні

Змінні визначені у файлі:

group_vars/all.yml

Приклад:

site_title: “Ansible Nginx Server”
site_message: “Deployed with Ansible”
--
Базове налаштування сервера:

ansible-playbook playbooks/baseline.yml

Налаштування firewall:

ansible-playbook playbooks/firewall.yml

Розгортання Nginx:

ansible-playbook playbooks/nginx.yml
--

Після виконання playbook сервер запускає веб-сайт через Nginx.

Сайт доступний за адресою:

http://18.184.5.255/

Приклад сторінки:

Ansible Nginx Server
Deployed with Ansible
