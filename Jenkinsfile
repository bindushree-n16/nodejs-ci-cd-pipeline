pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Node.js application'
                sh 'node --version'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests'
                sh 'node --test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment stage completed'
            }
        }
    }
}
