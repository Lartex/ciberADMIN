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
        stage('Start APP') {
            steps {
                sh 'npm install forever -g'
                sh 'forever start node_modules/@angular/cli/bin/ng serve'
            }
        }                     
    }
}
