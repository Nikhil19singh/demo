pipeline{
    agent any

    stages{
        stage("Nikhil"){
            steps{
                echo "Nikhil first steps"
            }
        }
        stage("Deepak"){
            steps{
                echo "Deepak second"
            }
        }
        stage("Install dependencies"){
            steps{
                sh 'npm install'
            }
        }
    }


    post{
        
    }
}
