pipeline {
    agent {
        docker {
            image 'node:20'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building Node.js application'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
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
