#!/bin/bash
docker stack deploy -c ./docker.stack.yml "dev-$USER"
