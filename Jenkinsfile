pipeline {
    agent any
    
    stages {
        stage('Navigate to Component') {
            steps {
                dir('src/components') {
                    // Perform actions within the subdirectory
                    sh 'ls -la'
                }
            }
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
