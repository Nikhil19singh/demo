pipeline {
    agent any

    stages {

        stage('Docker Build') {
            steps {
                sh '/usr/local/bin/docker build -t practice .'
            }
        }
        stage('Docker Run') {
            steps {
                sh '/usr/local/bin/docker rm -f practice-container || true'
                sh '/usr/local/bin/docker run -d --name practice-container -p 6969:6969 practice'
            }
        }
    }
}