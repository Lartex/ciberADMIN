pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Restore') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }         
    }
}
