docker run -p 8181:80 -d gitlab/gitlab-ce:14.1.3-ce.0 
https://docs.gitlab.com/12.10/ee/security/reset_root_password.html
docker run -p 8181:80 -v /srv/gitlab/config:/etc/gitlab -d gitlab/gitlab-ce:14.1.3-ce.0 

runner

```console
  docker run -d --name gitlab-runner --restart always \
     -v /srv/gitlab-runner/config:/etc/gitlab-runner \
     -v /var/run/docker.sock:/var/run/docker.sock \
     gitlab/gitlab-runner:latest
```
