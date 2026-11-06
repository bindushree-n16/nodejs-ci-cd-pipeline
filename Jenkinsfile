pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Node.js application'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment stage completed'
            }
        }
    }
}
