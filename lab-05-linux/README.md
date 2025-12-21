# Lab №5 — Linux


## Тестове середовище

- ОС: Ubuntu Linux
- Віртуалізація: VirtualBox
- Мережа: Host-only / NAT

---

## Завдання 1. Оновлення системи та встановлення Nginx

Оновлення списку пакетів та встановлення Nginx з офіційного репозиторію:

```bash
sudo apt update
sudo apt install nginx

## Завдання 2. Додавання PPA-репозиторію Nginx

Додавання стабільного PPA-репозиторію:

```bash
sudo add-apt-repository ppa:nginx/stable
sudo apt update
sudo apt install nginx

## Завдання 3. Видалення PPA та повернення до офіційної версії

Для повернення до пакета з офіційного репозиторію використано ppa-purge:

```bash
sudo apt install ppa-purge
sudo ppa-purge ppa:nginx/stable

Це видаляє PPA та знижує версію пакета до офіційної.

## Завдання 4. Створення власного systemd-сервісу

### Крок 1. Створення скрипта
```bash
sudo nano /usr/local/bin/write_date.sh

Вміст файлу:
```bash
#!/bin/bash
date >> /var/log/date.log

Надання прав на виконання:
```bash
sudo chmod +x /usr/local/bin/write_date.sh

### Крок 2. Створення systemd-сервісу
```bash
sudo nano /etc/systemd/system/date-writer.service

Вміст файлу:
[Unit]
Description=Write current date to log

[Service]
ExecStart=/usr/local/bin/write_date.sh

### Завдання 5. Створення systemd-таймера
sudo nano /etc/systemd/system/date-writer.timer

Вміст файлу:
[Unit]
Description=Run date-writer service every minute

[Timer]
OnCalendar=*-*-* *:*:00
Unit=date-writer.service

[Install]
WantedBy=timers.target

Увімкнення таймера
sudo systemctl enable --now date-writer.timer
sudo systemctl status date-writer.timer
Таймер запускає сервіс кожну хвилину та записує дату у лог-файл.


### Завдання 6. Налаштування брандмауера (UFW)
Блокування SSH-доступу з конкретної IP-адреси:
sudo ufw deny from 192.168.56.200 to any port 22

Дозвіл SSH-доступу з іншої адреси:
sudo ufw allow from 192.168.56.1 to any port 22

Увімкнення UFW:
sudo ufw enable

### Завдання 7. Встановлення та налаштування Fail2Ban

sudo apt install fail2ban

Створення локальної конфігурації:

sudo nano /etc/fail2ban/jail.local

Вміст файлу:
[sshd]
enabled = true
port = ssh
maxretry = 5
findtime = 10m
bantime = 1h


Перезапуск та перевірка:

sudo systemctl restart fail2ban
sudo fail2ban-client status sshd

 Fail2Ban автоматично блокує IP-адреси після декількох невдалих спроб входу.


### Завдання 8. Робота з дисками та файловими системами

Додавання нового диска

У налаштуваннях VirtualBox додано другий диск розміром 7 GB.
У системі він визначився як /dev/sdb.

Перевірка: lsblk

Створення розділу

sudo fdisk /dev/sdb
Було створено розділ /dev/sdb1.


Форматування розділу

sudo mkfs.ext4 /dev/sdb1


Монтування розділу
Створення точки монтування: sudo mkdir /mnt/newdisk
Монтування: sudo mount /dev/sdb1 /mnt/newdisk
Перевірка:
df -h

Автоматичне монтування (fstab)
Отримання UUID: 
sudo blkid /dev/sdb1


Редагування /etc/fstab:
sudo nano /etc/fstab
Доданий рядок:
UUID=169a9c74-13bb-4543-a03d-32dd23b3f8ed /mnt/newdisk ext4 defaults 0 2

Перевірка sudo mount -a

Висновок

У ході лабораторної роботи було виконано базове адміністрування Linux:
керування пакетами та репозиторіями, створення systemd-сервісів і таймерів,
налаштування безпеки за допомогою UFW і Fail2Ban, а також робота
з дисками та автоматичним монтуванням файлових систем.
