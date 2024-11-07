node {
    def repoUrl = 'https://github.com/Aadarsh077/Stock_Insights.git'
    def imageName = 'stock-insights'

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


    stage('Push Image') {
        bat "docker push ${imageName}"
    }
}
