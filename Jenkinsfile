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
                    npx cypress verify
                '''
            }
        }

        stage('Run Cypress') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat '''
                        chcp 65001 > nul
                        npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=false,json=true
                    '''
                }
            }
        }

        stage('Generate Report') {
            steps {
                bat '''
                    chcp 65001 > nul
                    npx mochawesome-merge cypress/reports/*.json > cypress/report.json
                    npx marge cypress/report.json --reportDir cypress/reports --reportFilename mochawesome.html
                '''
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }

    post {
        always {
            echo 'Pipeline selesai.'
        }
    }
}
