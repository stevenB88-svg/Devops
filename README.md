# Devops

📦 tu-repo
├── 📂 .github
│   ├── 📂 workflows
│   │   ├── deploy.yml            # GitHub Actions para CI/CD
│   │   ├── td.json               # Definición de la tarea ECS
├── 📂 app                         # Código de la aplicación (Node.js)
│   ├── .dockerignore              # Archivos ignorados en Docker
│   ├── .gitignore                 # Archivos ignorados en Git
│   ├── Dockerfile                 # Imagen Docker de la aplicación
│   ├── index.js                   # Código principal de la aplicación
│   ├── package.json               # Dependencias y configuración del proyecto Node.js
│   ├── package-lock.json          # Bloqueo de versiones de dependencias
├── 📂 terraform                    # Infraestructura como código (IaC)
│   ├── config.tf                   # Configuración del backend y provider de Terraform
│   ├── vpc.tf                      # Configuración de la red VPC, subnets y security groups
│   ├── repository.tf                # Creación del repositorio en Amazon ECR
│   ├── ecs.tf                      # Configuración del Cluster ECS, Service y Task Definition
├── README.md                       # Documentación del proyecto


1️⃣ Crear Dockerfile con Node.js.
2️⃣ Construir la imagen: docker build -t mi-app-node .
3️⃣ Ejecutar el contenedor: docker run -d -p 3000:3000 --name mi-app-container mi-app-node
4️⃣ Verificar que funciona con docker ps 
5️⃣ Acceder al contenedor con docker exec -it mi-app-container sh
6️⃣ Detener y eliminar con docker stop mi-app-container && docker rm mi-app-container



📂 workflows
✅ Se ejecuta cuando hay un push a la rama main.
✅ Configura AWS y se autentica en Amazon Elastic Container Registry (ECR).
✅ Construye, etiqueta y sube la imagen Docker al repositorio de ECR.
✅ Actualiza la tarea de ECS con la nueva imagen.
✅ Despliega la aplicación en Amazon ECS.

📂 app 

1️⃣ Escribe el código en index.js
2️⃣ Define dependencias en package.json
3️⃣ Construye la imagen Docker con Dockerfile
4️⃣  Ejecuta la aplicación en un contenedor con docker run



📂 terraform

📌 Explicación de cada archivo
1️⃣ config.tf → Configuración de Terraform
Define que Terraform utilizará AWS como proveedor de infraestructura.
🔑 Credenciales de acceso a AWS

2️⃣ vpc.tf → Configuración de la red en AWS
Este archivo crea: ✅ VPC (Red privada en AWS).
✅ Subnets públicas y privadas.
✅ Security Groups para controlar tráfico.

👉 Explicación:
Se crea una VPC con CIDR 10.0.0.0/16.
Se crea una subnet pública en la zona us-east-1a.
Se configura un Security Group que permite tráfico en el puerto 80.

3️⃣ repository.tf → Creación del Repositorio en ECR
Este archivo crea: ✅ Un Amazon ECR (Elastic Container Registry) para almacenar imágenes Docker.

👉 Explicación:
Se crea un repositorio en Amazon ECR con el nombre "app_repo".
Se activa escaneo automático de vulnerabilidades.

4️⃣ ecs.tf → Configuración de ECS (Cluster, Service y Task Definition)
Este archivo configura: ✅ ECS Cluster donde se ejecutarán los contenedores.
✅ Task Definition que define los parámetros del contenedor (imagen Docker, CPU, memoria, puertos, logs).
✅ ECS Service que mantiene la aplicación en ejecución.

👉 Explicación:

Se crea un ECS Cluster llamado "app-cluster".
Se define una Task Definition (app-task) con:
Imagen Docker desde ECR (:latest).
256 MB de CPU y 512 MB de RAM.
Puerto 80 abierto.
Logs en CloudWatch.
Se crea un ECS Service (app-service) con:
Se ejecuta en AWS Fargate (sin necesidad de administrar servidores).
Se conecta a la subnet pública y usa un Security Group.

![Captura de pantalla 2025-02-09 a la(s) 3 31 11 p m](https://github.com/user-attachments/assets/1bbbb763-c0e4-40ea-a33d-5d8ff288316b)


