#!/bin/bash
sudo systemctl start docker
IS_DB_UP=$(docker ps -q -f name=nginx)
if [ -z "$IS_DB_UP" ]; then
    echo "START SYSTEM WITH BLUE"
    cd /home/ec2-user/github_action
    docker-compose -f docker-compose.yaml up --build -d
    exit
fi

IS_BLUE_UP=$(docker ps -q -f name=backend-blue)

if [ -z "$IS_BLUE_UP" ]; then
    echo "START BLUE"
    cd /home/ec2-user/github_action
    docker-compose -f docker-compose-blue.yaml up --build -d
    BEFORE_COMPOSE_COLOR="green"
    AFTER_COMPOSE_COLOR="blue"
else
    echo "START GREEN"
    cd /home/ec2-user/github_action
    docker-compose -f docker-compose-green.yaml up --build -d
    BEFORE_COMPOSE_COLOR="blue"
    AFTER_COMPOSE_COLOR="green"
fi

IS_EXIST_AFTER=$(docker ps | grep backend-${AFTER_COMPOSE_COLOR})
if [ -n "$IS_EXIST_AFTER" ]; then
    echo "Load complete. Start switching after 60 sec"
    sleep 60
    docker exec -i nginx cp /etc/nginx/conf.d/${AFTER_COMPOSE_COLOR}.conf /etc/nginx/conf.d/default.conf
    docker exec -i nginx nginx -s reload
    cd /home/ec2-user/github_action
    docker-compose -f docker-compose-${BEFORE_COMPOSE_COLOR}.yaml down
    echo "SHUTDOWN $BEFORE_COMPOSE_COLOR"

else
    echo "ERROR!"
fi
