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
      steps { bat "docker build -t ${IMAGE}:latest ." }
    }

    stage('Deploy') {
      steps {
        bat(script: "docker rm -f ${NAME}", returnStatus: true)
        bat "docker run -d -p ${PORT}:3000 --name ${NAME} ${IMAGE}:latest"
      }
    }

    stage('Verify') {
      steps {
        sleep 5
        bat "curl -f http://localhost:${PORT}/status"
      }
    }
  }
}