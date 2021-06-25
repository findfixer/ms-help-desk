pipeline {
  environment {
    registry = "findfixer/ms-help-desk"
    registryCredential = 'DockerHub'
    dockerImage = ''
  }
  
  agent any
  tools {nodejs "node" }
    
  stages {

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Node Ace Migration') {
      steps {
         sh 'node ace migration:run'
      }
    }

    stage('Node Ace DB Seed') {
      steps {
         sh 'node ace db:seed'
      }
    }

    stage('Test') {
      steps {
         sh 'npm run test'
      }
    }           

    stage('Build Node') {
      steps {
         sh 'npm run build'
      }
    }

    stage('Building image Docker') {
      steps{
        script {
          dockerImage = docker.build registry + ":latest"
        }
      }
    }
    stage('Push Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Deploy') {
      steps{
        sh "docker-compose up -d"
      }
    }          
  }
}
