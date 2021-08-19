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

# Volumes
VOLUME /home/jaliaga/jenkins-server-jaliaga
#docker run -p 8080:8080 -p 50000:50000 -v /home/jaliaga/jenkins-server-jaliaga/:/var/jenkins_home jenkins:2.60.3
#docker run -p 8080:8080 -p 50000:50000 -d -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
