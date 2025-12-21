# Lab №3 — Jenkins #1 (Freestyle Job & Pipeline)


## Тестове середовище

- Jenkins (Docker / VM)
- Java: JDK 17
- Maven: Maven 3
- Репозиторій з кодом:
  https://github.com/vskoropada-rgb/gs-spring-boot.git

---

## Частина 1. Freestyle Job

### Крок 1. Створення Freestyle Job
У Jenkins створено нову задачу типу **Freestyle project** з назвою: Simple Freestyle Job


### Крок 2. Налаштування Source Code Management
У розділі **Source Code Management** обрано Git та вказано:

- Repository URL: https://github.com/vskoropada-rgb/gs-spring-boot.git
- Branch: main

### Крок 3. Налаштування збірки
У секції **Build** додано крок **Invoke top-level Maven targets**:

- Maven Version: `Maven3`
- Root POM: complete/pom.xml
- Goals: clean install

### Результат Freestyle Job
Після запуску Freestyle Job проєкт був успішно зібраний без помилок,
що підтверджується логами Jenkins.

## Частина 2. Jenkins Pipeline

### Крок 1. Створення Jenkinsfile
У репозиторій було додано файл `Jenkinsfile`,
який описує повний CI-процес у вигляді коду.

Pipeline виконує:
- checkout коду з GitHub
- збірку Spring Boot застосунку через Maven
- архівацію згенерованого `.jar` файлу
- надсилання нотифікацій у Telegram

---

### Фінальний Jenkinsfile

```groovy
pipeline {
  agent any

  tools {
      maven 'Maven3'
      jdk 'JDK17'
  }

  environment {
      TELEGRAM_TOKEN = credentials('TELEGRAM_TOKEN')
      TELEGRAM_CHAT_ID = credentials('TELEGRAM_CHAT_ID')
  }

  stages {
      stage('Checkout') {
          steps {
              git branch: 'main',
                  url: 'https://github.com/vskoropada-rgb/gs-spring-boot.git'
          }
      }

      stage('Build') {
          steps {
              dir('complete') {
                  sh 'mvn clean install'
              }
          }
      }

      stage('Archive Artifact') {
          steps {
              archiveArtifacts artifacts: 'complete/target/*.jar',
                               fingerprint: true
          }
      }
  }

  post {
      success {
          sh """
          curl -s -X POST https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage \
          -d chat_id=${TELEGRAM_CHAT_ID} \
          -d text="✅ SUCCESS: Job '${JOB_NAME}' Build #${BUILD_NUMBER} completed successfully!"
          """
      }

      failure {
          sh """
          curl -s -X POST https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage \
          -d chat_id=${TELEGRAM_CHAT_ID} \
          -d text="❌ FAILURE: Job '${JOB_NAME}' Build #${BUILD_NUMBER} failed!"
          """
      }
  }
}
