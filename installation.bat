@echo off

cd backend

call npm i

cd ..

cd frontend

call npm i

cd ..

call docker run --name plather-db -p 27017:27017 mongo:latest