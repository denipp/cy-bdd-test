pipeline {
    agent any

    options {
        ansiColor('xterm') 
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat '''
                     chcp 65001 > nul
                    npm install
                    npx cypress install
                '''
            }
        }

        stage('Run Cypress') {
            steps {
                bat '''
                     chcp 65001 > nul
                    npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=true,json=false
                '''
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'mochawesome-report',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }
}