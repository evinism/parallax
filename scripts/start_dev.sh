#!/bin/bash

# you can just... add things!
echo "Starting Redis Server"
redis-server --port 6379 --maxclients 1000 &

echo "Starting Webpack..."
webpack --watch &

echo "Starting Server"
npm run server:development

echo "Cleaning up..."
kill %1 # $WEBPACK #Clean up on server die
kill %2 # $REDIS_SERVER
wait
echo "Processes killed"
sleep 1
