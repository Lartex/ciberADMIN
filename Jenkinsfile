pipeline{
    agent{
        label "master"
    }
    stages{
        
            stage('npm-build') {
                agent {
                    docker {
                        image 'node:latest'
                    }
                }

                steps {
                    echo "Branch is ${env.BRANCH_NAME}..."

                    withNPM(npmrcConfig:'my-custom-npmrc') {
                        echo "Performing npm build..."
                        sh 'npm install'
                    }
                }
            }

            stage('Execute Angular project'){
               steps {
                    echo "Starting Angular"

                    withNPM(npmrcConfig:'my-custom-npmrc') {
                        echo "Performing npm build..."
                        sh 'npm build'
                    }
                } 
            }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
