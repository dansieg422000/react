pipeline {
    agent any
    
    stages {
        stage('Navigate to Component') {
            steps {
                dir('src/components') {
                    sh 'ls -la'
                }
            }
        }

        stage('Check the directory') {
            sh 'pwd'
        }
        
        // stage("Running Parallel task") {
        //     steps {
        //         parallel testA: {
        //             sh 'echo test A is running'
        //         }, testB: {
        //             sh 'echo test B is running'
        //         }
        //     }
        // }

        // stage("Run Unit Test") {
        //     steps {
        //         nodejs('NodeJS') {
        //             // sh 'npm test'
        //             sh 'npm -v'
        //             sh 'npm audit'
        //         }
                
        //     }
        // }
    }
    
    post {
        always {
            echo "Trigger an Email if something went wrong."
        }
    }
}
