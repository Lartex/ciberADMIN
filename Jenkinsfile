pipeline {
    agent {
        docker { image 'node:10-alpine' }
    }
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
                sh 'npm run ng build'
            }
        }       
    }
}
