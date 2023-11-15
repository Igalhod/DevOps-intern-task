# DevOps intern task - docker-node.js application

This application is a Node.js app that runs web-server in local host on port 8080 and wirte's "Hello World".

## Prerequisites

You need donwload Docker and use it to pull my image from Docker hub.

Link to donwload Docker -> https://docs.docker.com/engine/install/
For linux you can use the command:

```sudo apt install docker.io```

In your terminal(command line) you can this command to pull my image:

``` docker pull igalhod/devops-task ```

## How to build the docker image

To build the docker image you need the files that are in the repo, clone the repo in to a folder
and then open an command line in the folder and insert this command:
```docker build -t username_of_the_docker_hub/image_name .```

## How to run the docker

You can run the docker using the docker dsektop or using commands for runing:
- Link to donwload Docker -> https://docs.docker.com/engine/install/

### Commands to run
#### windows
`docker container run -d -p 8080:8080 igalhod/devops-task`
to stop the container use:

`docker container stop *image id*` - You got the image id when you inserted the run command, Note: you can insert only the first 3 characters of the image id.