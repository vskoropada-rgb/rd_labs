# LAB №14 — SQL (MySQL)

## Використані інструменти
- Oracle Linux 9
- MySQL Server 8.0
- mysqldump

---

## 📁 Структура

lab-14-sql/
└── README.md

---

##  КРОК 1. Створення бази даних

```sql
	CREATE DATABASE SchoolDB
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_unicode_ci;

	USE SchoolDB;

## КРОК 2. Створення таблиць

Institutions

```sql
CREATE TABLE Institutions (
    institution_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_name VARCHAR(255) NOT NULL,
    institution_type ENUM('School', 'Kindergarten') NOT NULL,
    address VARCHAR(255) NOT NULL
);

Classes

CREATE TABLE Classes (
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL,
    institution_id INT NOT NULL,
    direction ENUM(
        'Mathematics',
        'Biology and Chemistry',
        'Language Studies'
    ) NOT NULL,
    FOREIGN KEY (institution_id)
        REFERENCES Institutions(institution_id)
        ON DELETE CASCADE
);


Children

CREATE TABLE Children (
    child_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    birth_date DATE,
    year_of_entry INT,
    age INT,
    institution_id INT,
    class_id INT,
    FOREIGN KEY (institution_id)
        REFERENCES Institutions(institution_id)
        ON DELETE CASCADE,
    FOREIGN KEY (class_id)
        REFERENCES Classes(class_id)
        ON DELETE CASCADE
);

Parents

CREATE TABLE Parents (
    parent_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    child_id INT,
    tuition_fee DECIMAL(10,2),
    FOREIGN KEY (child_id)
        REFERENCES Children(child_id)
        ON DELETE CASCADE
);

## КРОК 3. Наповнення даними (INSERT)

INSERT INTO Institutions VALUES
(1,'Kyiv Lyceum No.1','School','Kyiv, Shevchenko St. 10'),
(2,'Lviv Gymnasium','School','Lviv, Franko St. 22'),
(3,'Sunny Kids','Kindergarten','Odesa, Sea Ave. 5');

INSERT INTO Classes VALUES
(1,'10-A',1,'Mathematics'),
(2,'9-B',2,'Language Studies'),
(3,'Group A',3,'Biology and Chemistry');

INSERT INTO Children VALUES
(1,'Ivan','Petrenko','2010-05-14',2020,14,1,1),
(2,'Olena','Koval','2011-09-20',2021,13,2,2),
(3,'Mark','Shevchenko','2019-03-11',2023,5,3,3);

INSERT INTO Parents VALUES
(1,'Oleh','Petrenko',1,1500.00),
(2,'Iryna','Koval',2,1800.00),
(3,'Andrii','Shevchenko',3,1200.00);

## КРОК 4. SELECT-запити

Діти + заклад + напрям

	SELECT c.first_name, c.last_name, i.institution_name, cl.direction
	FROM Children c
	JOIN Institutions i ON c.institution_id = i.institution_id
	JOIN Classes cl ON c.class_id = cl.class_id;


Батьки + діти + оплата

	SELECT p.first_name, p.last_name, c.first_name, c.last_name, p.tuition_fee
	FROM Parents p
	JOIN Children c ON p.child_id = c.child_id;

Заклади + кількість дітей

	SELECT i.institution_name, i.address, COUNT(c.child_id) AS children_count
	FROM Institutions i
	LEFT JOIN Children c ON i.institution_id = c.institution_id
	GROUP BY i.institution_id;

## КРОК 5. Backup & Restore

mysqldump -u root -p SchoolDB > schooldb_backup.sql

Restore
mysql -u root -p -e "CREATE DATABASE SchoolDB_Restore"
mysql -u root -p SchoolDB_Restore < schooldb_backup.sql

## КРОК 6. Анонімізація даних

UPDATE Children
    SET first_name='Child', last_name='Anonymous';

UPDATE Parents
    SET first_name=CONCAT('Parent', parent_id),
    last_name='Anon',
    tuition_fee=ROUND(RAND()*500 + 1000,2);

UPDATE Institutions
    SET institution_name=CONCAT('Institution', institution_id);

