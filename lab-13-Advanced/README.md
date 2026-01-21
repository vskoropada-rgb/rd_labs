# LAB №13. Advanced K8s

## Структура проєкту


lab-13-Advanced/
├── redis-service.yaml
├── redis-statefulset.yaml
├── falco-daemonset.yaml
├── lab-13-helm/
│   └── advanced-k8s/
│       ├── Chart.yaml
│       ├── values.yaml
│       ├── templates/
│       │   ├── _helpers.tpl
│       │   ├── redis-service.yaml
│       │   ├── redis-statefulset.yaml
│       │   └── falco-daemonset.yaml
│       └── charts/
└── README.md


Завдання 1: Redis StatefulSet

	1. Створення Service та StatefulSet
	kubectl apply -f redis-service.yaml
	kubectl apply -f redis-statefulset.yaml

	2. Перевірка стану подів
	kubectl get pods
	kubectl get pvc

	3. Перевірка збереження даних
	kubectl exec -it redis-0 -- redis-cli
	SET lab13 "statefulset works"
Видалення пода:
	kubectl delete pod redis-0

Повторна перевірка:
	kubectl exec -it redis-0 -- redis-cli
	GET lab13

Завдання 2: Falco DaemonSet

	1. Розгортання Falco
	kubectl apply -f falco-daemonset.yaml

	2. Перевірка стану
	kubectl get pods -n kube-system -l app=falco

	3. Перегляд логів
	kubectl logs -n kube-system -l app=falco

Опціонально: Helm chart

	1. Перевірка Helm chart
	helm lint .
	helm template advanced-k8s .

	2. Видалення ресурсів, створених вручну
	kubectl delete statefulset redis
	kubectl delete service redis
	kubectl delete pvc -l app=redis
	kubectl delete daemonset falco -n kube-system

	3. Встановлення Helm chart
	helm install advanced-k8s ./advanced-k8s

	4. Перевірка після встановлення
	kubectl get pods
	kubectl get pvc
	kubectl get pods -n kube-system -l app=falco	


Результат
	•	Redis розгорнуто як stateful-застосунок з постійним зберіганням
	•	Дані зберігаються після перезапуску подів
	•	Falco працює як DaemonSet та моніторить події безпеки
	•	Helm використано для керування ресурсами (опціонально)
