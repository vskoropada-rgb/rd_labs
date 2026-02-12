# LAB №19 – AWS EKS

---

## 1️ Перевірка підключення до кластера

kubectl get nodes

---

## 2️ Розгортання nginx Deployment

kubectl apply -f deployment.yaml 
kubectl apply -f service.yaml 

Перевірка:

kubectl get pods 
kubectl get svc 

Отримати External IP та перевірити в браузері.

---

## 3️ Створення PVC (EBS)

kubectl apply -f pvc.yaml 

Перевірка:

kubectl get pvc 

---

## 4️ Запуск Job

kubectl apply -f job.yaml 

Перевірка:

kubectl get jobs 
kubectl logs job/eks-job 

---

## 5️ Робота з namespace

kubectl apply -f busybox.yaml 

Перевірка:

kubectl get pods -n dev 

---

## 6️ Очистка ресурсів

kubectl delete -f busybox.yaml 
kubectl delete -f job.yaml 
kubectl delete -f pvc.yaml 
kubectl delete -f service.yaml 
kubectl delete -f deployment.yaml 

---

##  Результат

- Створено EKS кластер
- Розгорнуто nginx з LoadBalancer
- Створено PVC (EBS)
- Виконано Job
- Створено namespace dev з 5 репліками busybox
