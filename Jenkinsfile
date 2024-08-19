pipeline {
    agent any
    
    stages {
        stage("Checkout") {
            steps {
                git branch:'master', url: 'https://github.com/dansieg422000/react'
            
            }
        }
        
        stage("Running Parallel task") {
            steps {
                parallel testA: {
                    sh 'echo test A is running'
                }, testB: {
                    sh 'echo test B is running'
                }
            }
        }

        stage("Run Unit Test") {
            steps {
                nodejs('NodeJS') {
                    // sh 'npm test'
                    sh 'npm -v'
                }
                
            }
        }
    }
    
    post {
        always {
            echo "Trigger an Email if something went wrong."
        }
    }
}
