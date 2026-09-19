def run(String cmd) {
  if (isUnix()) { sh cmd } else { bat cmd }
}

pipeline {
  agent any
  environment {
    IMAGE = 'status-api'
    NAME  = 'status-api-container'
    PORT  = '3000'
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Build and Test') {
      steps { run "docker build -t ${IMAGE}:latest ." }
    }
    stage('Deploy') {
      steps {
        run "docker rm -f ${NAME}"
        run "docker run -d -p ${PORT}:3000 --name ${NAME} ${IMAGE}:latest"
      }
    }
    stage('Verify') {
      steps {
        sleep 5
        run "curl -f http://localhost:${PORT}/status"
      }
    }
  }
}