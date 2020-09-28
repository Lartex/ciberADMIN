pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Restore') {
            steps {
                sh 'npm install'
            }
        }
                stage('Update') {
            steps {
                sh 'npm update'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }         
    }
}
