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
                // Simpan hasil status agar pipeline tidak langsung gagal
                script {
                    try {
                        bat '''
                            chcp 65001 > nul
                            npx cypress run --reporter mochawesome --reporter-options reportDir=mochawesome-report,overwrite=false,html=true,json=false
                        '''
                    } catch (Exception e) {
                        echo "Cypress tests failed, but continuing to generate report."
                        currentBuild.result = 'UNSTABLE'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Generate report even if tests failed.'
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
