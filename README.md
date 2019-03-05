# Docker-Kubernetes
This repo has been generated while learning how to integrate Docker with Kubernetes. 


Docker commands: https://github.com/wsargent/docker-cheat-sheet

Public Docker images: https://hub.docker.com

**Starting the App**
1. CD /simpleweb
2. docker run -p 8080:8080 stevegill/simpleweb

**Build the app/tests using docker-compose**
- docker-compose up --build

**Using Nginx**
1. run `docker build .`
2. The last line provides the build ID: `Successfully built b8d7b93b77bb`
3. run `docker run -p 8080:80 b8d7b93b77bb`

**Continuous Integration**
https://travis-ci.com/stevensgill/Docker-Kubernetes/requests?requestId=182192544

**Kubernetes**
/simplek8s
Configurations files:
- client-node-ports.yaml
- client-pod.yaml

Apply configurations:
- kubectl apply -f client-pod.yaml
- kubectl apply -f client-node-ports.yaml

Get Status:
- kubectl get pods
- kubectl get services
