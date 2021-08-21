# GitLab local server

docker run -p 8181:80 -d gitlab/gitlab-ce:14.1.3-ce.0 
docker run -p 8181:80 -v /srv/gitlab/config:/etc/gitlab -d gitlab/gitlab-ce:14.1.3-ce.0 


## Set up root password

<https://docs.gitlab.com/12.10/ee/security/reset_root_password.html>

```console
gitlab-rails console -e production
--------------------------------------------------------------------------------
 Ruby:         ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-linux]
 GitLab:       14.1.3 (132256d76b1) FOSS
 GitLab Shell: 13.19.1
 PostgreSQL:   12.6
--------------------------------------------------------------------------------
Loading production environment (Rails 6.1.3.2)
irb(main):001:0> user = User.where(id: 1).first
=> #<User id:1 @root>
irb(main):002:0> user.password = 'Huercalense19!'
=> "Huercalense19!"
irb(main):003:0> user.password_confirmation = 'Huercalense19!'
=> "Huercalense19!"
irb(main):004:0> user.save!
Enqueued ActionMailer::MailDeliveryJob (Job ID: e8174934-a121-4f6b-b6e3-ce5f0559fe75) to Sidekiq(mailers) with arguments: "DeviseMailer", "password_change", "deliver_now", {:args=>[#<GlobalID:0x00007ff47ef4b8c8 @uri=#<URI::GID gid://gitlab/User/1>>]}
=> true
irb(main):005:0> exit
root@25a6526a5443:/# exit
```

runner

```console
  docker run -d --name gitlab-runner --restart always \
     -v /srv/gitlab-runner/config:/etc/gitlab-runner \
     -v /var/run/docker.sock:/var/run/docker.sock \
     gitlab/gitlab-runner:latest
```
