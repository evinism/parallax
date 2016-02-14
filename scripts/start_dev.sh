#!/bin/bash
npm run watch &
npm run server:development
echo "Cleaning up..."
kill %1 #Clean up on server die
wait
sleep 1
