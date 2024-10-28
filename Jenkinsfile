node {
    def trivy = 'C:\\Users\\HP\\Downloads\\trivy_0.45.1_windows-64bit\\trivy.exe'
    def repoUrl = 'https://github.com/Aadarsh077/Stock_Insights.git'
    def imageName = 'image name'

    stage('Checkout') {
        checkout([
            $class: 'GitSCM',
            branches: [[name: 'master']],
            userRemoteConfigs: [[
                url: repoUrl,
                credentialsId: '9ec622aa-547f-4fcd-979c-eac439d30369'
            ]]
        ])
    }

    stage('Install Dependencies') {
        bat 'npm install'
    }

    stage('Build Image') {
        bat "docker build -t ${imageName} ."
    }
    stage('sonar-scanner'){
  
    }
  

    stage('Trivy Image Scan') {
        bat "${trivy} image --exit-code 1 --severity HIGH,CRITICAL ${imageName}"
    }

    stage('Push Image') {
        bat "docker push ${imageName}"
    }
}
