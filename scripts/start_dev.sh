#!/bin/bash

# you can just... add things!
echo "Initializing MongoDB"
service mongod start --config config/mongo-local.conf

echo "Starting Redis Server"
redis-server --port 6379 --maxclients 1000 &

echo "Starting Webpack..."
webpack --watch &

echo "Starting Server"
npm run server:development

echo "Cleaning up..."
service mongod stop
kill `jobs -p`
wait
echo "Processes killed"
sleep 1
