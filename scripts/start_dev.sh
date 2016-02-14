#!/bin/bash

# you can just... add things!
npm run watch &
npm run redis-dev &
npm run server:development

echo "Cleaning up..."
kill %1 #Clean up on server die
kill %2
wait
sleep 1
