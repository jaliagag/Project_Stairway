# Project Stairway

* I'm colaborating. - Martin Samez

## Useful links

* <https://cloud.google.com/endpoints/docs/frameworks/java/test-deploy>
* <https://cloud.google.com/endpoints/docs/frameworks/java/annotate-code>
* <https://developers.redhat.com/blog/2019/07/26/5-principles-for-deploying-your-api-from-a-ci-cd-pipeline>
* <https://circleci.com/blog/testing-an-api-with-postman/>

```console
jaliaga@ubuntumain:~/Project_Stairway/my-adonis-api$ pwd
~/Project_Stairway/my-adonis-api
jaliaga@ubuntumain:~/Project_Stairway/my-adonis-api$ adonis serve --dev
```

## Bootstrapping jenkins server and saving its state

<https://rangle.io/blog/running-jenkins-and-persisting-state-locally-using-docker-2/>


```console
docker volume create vjenkinsv
docker pull jenkins/jenkins
<<<<<<< HEAD
docker run -p 80:8080/tcp jenkins/jenkins:latest
###
docker run -p 80:8080/tcp jenkins/jenkins:latest -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk11
docker run -p 80:8080/tcp jenkins/jenkins:latest -v /Users/Documents/jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk11
=======
docker container run \                                                                                                                                                                                   137 ⨯
    -p 80:8080/tcp \
    -v vjenkinsv:/var/jenkins_home \
    jenkins/jenkins
>>>>>>> 04bfc32805106eda5f97cbcc9509a0190b5c1b87
```

On the browser, use: `localhost:80` - use the password provided by the docker container _on first setup_. Wait until plugins are installed.

Create user - root:toor, for example.



