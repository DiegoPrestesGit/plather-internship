<img alt="ComputerScience" src="https://w.wallhaven.cc/full/p8/wallhaven-p8zow3.jpg" />

<div align="center">
<blockquote >“Não existe linha de chegada, a vitória está em se manter correndo”</blockquote>

## The Platanus Challenge :milky_way:

</div>

## Introduction

In this repository contains a README.txt, which is the summary of my activities, but, for more details i've also created a README.md and TODO.md in both frontend and backend. There will be a better described my way of thinking. If you whom read this have not that much time, you can easily go just with the README.txt or README.md. That is all you need.

## Install :wrench:

My first idea was to create a Docker-compose file. And if you run ``docker-compose up -d`` inside the project folder it will create a network with three containers inside: backend, frontend and the plather-db, which is mongoDB. That's really nice! And (that part) is working! But sadly I'm missing something in configuration and my backend cannot connect with the database.

So, I created a simplistic .bat file which will run npm I in both folders, back and frontend, and also create the database. After that you can manually run ``npm run dev`` inside the backend folder and ``npm start`` inside the frontend folder. It will be all up and runnin.

The ``insomnia-file-for-test.json`` inside the backend contains some routes for you to test.

*NOTE: I personally prefer ``yarn``, but since most of the devs I know uses ``npm``, all the commands are in ``npm``, not ``yarn``*

## Failures and Struggles

*As I said before, inside the backend and frontend folder will be a README.md and TODO.md which contains more details about each one. But since this is a summary, let's summarize this.*

### First Fail/Struggle: the Frontend

* You only discover if you know something when you have to do 100% by yourself. In the last 5 days, 3 of these was me trying to make peace with CSS. While the backend Imade in a few hours, the frontend was an epic battle to conquer the piece of page that I needed. The frontend has not been completed. Far from it, in fact. I'm going to use this project to create a personal portfolio and improve my frontend skills.

### Second Fail/Struggle: Time management

* I have lost so much time in the battle with CSS that I wasn't able to create the integration between front and backend. I don't use to let go of problems that Iwant to solve, but I needed to let this CSS aside to create other things, which I didn't did.

* Also wanted to deliver a nice docker-compose, but since it was the first time that I ever done this, I should have predicted that it would, probably, needed more time for the config part of it. I believe that sometimes stubbornness is the enemy of time management. 

### Thirdy Fail/Struggle: Database configuration in Docker

* I use Docker for over a year, but I never used it like that, and I intend to use it in all the projects I create for now, until I get the hang of it. Sometimes I can be stubborn, but not a boring one. I loved the infrascructure part of it, it really catch me.

## Last but not least

This was probably the best experience I had in the last few months, it taught me a lot about me as a developer and I intend to create more challenges like this for myself, and for that, I am already grateful to those who proposed the challenge.

### Some points I have to improve about my code habilits: 
* CSS: Grid, Flexbox and learn to position elements in the screen.
* Docker and Docker-compose: learn to setup the environment and work completely inside a container.
* Frontend + Backend integration: even though I didn't install Axios to do the integration, I'm sure it's something that deserves my attention.

#### Once again, thank you for your challenge and your time. I would love to receive feedback, positive or negative, honesty is something I value.
