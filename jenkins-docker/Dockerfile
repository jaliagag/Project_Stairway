# Jenkins oficial image
FROM jenkins/jenkins:lts

# Skip initial setup wizard & disable CLI
#ARG JAVA_OPTS
#ENV JAVA_OPTS "-Djenkins.install.runSetupWizard=false ${JAVA_OPTS:-}"

# Variables
ENV JENKINS_HOME /var/jenkins_home

# Ports
EXPOSE 8080:8080
EXPOSE 50000:50000
#EXPOSE 50000/tcp