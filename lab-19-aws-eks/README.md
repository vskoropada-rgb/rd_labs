# LAB №19 – AWS EKS

---

## 1 Перевірка підключення до кластера

kubectl get nodes

---

## 2 Розгортання nginx Deployment

kubectl apply -f deployment.yaml 
kubectl apply -f service.yaml 

Перевірка:

kubectl get pods 
kubectl get svc 

Отримати External IP та перевірити в браузері.

---

## 3 Створення PVC (EBS)

kubectl apply -f pvc.yaml 

Перевірка:

kubectl get pvc 

---

## 4 Запуск Job

kubectl apply -f job.yaml 

Перевірка:

kubectl get jobs 
kubectl logs job/eks-job 

---

## 5 Робота з namespace

kubectl apply -f busybox.yaml 

Перевірка:

kubectl get pods -n dev 

---

## 6 Очищення ресурсів

```bash
kubectl delete -f busybox.yaml
kubectl delete -f job.yaml
kubectl delete -f pvc.yaml
kubectl delete -f service.yaml
kubectl delete -f deployment.yaml
```

---

## 7 Результат

- Створено кластер AWS EKS  
- Налаштовано доступ через kubectl  
- Розгорнуто nginx з Service типу LoadBalancer  
- Створено PersistentVolumeClaim (EBS)  
- Виконано Kubernetes Job  
- Створено namespace dev з 5 репліками busybox  
- Перевірено роботу Pod та Service  
- Усі ресурси успішно очищено  
