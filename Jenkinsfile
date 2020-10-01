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
                sh 'npm run build --prod'
            }
        }
//        stage('Start APP') {
//            steps {
//                sh 'npm install forever -g'
//            }
//        }                     
    }
}
