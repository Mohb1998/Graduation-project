# SMR Web application for smart monitoring

This project is made by AAST senior students and supervised by
Dr.Hany Hanafy

## What we want to achieve : 
We want to create a web application that will help have a more natural classroom enviroment for both teachers and students.
In the project directory, you can run:


## After downloading the app please make sure to run 
### `npm install`

To make sure that all the needed dependecies have been added

## To run the front end
you must be in the Senior Projects directory and then write the command 
### `npm start`

## To run the back end 
you must be in the Server directory and write the command
### `node server.js`

## Finally you will have to install ion-sfu to manage the video conference
To install and run the ion-sfu first you will have to clone this repo :
git clone https://github.com/pion/ion-sfu.git

after that you will run the server through this command 

Linux and mac : go build ./cmd/signal/json-rpc/main.go && ./main -c config.toml

Windows : go build ./cmd/signal/json-rpc/main.go && main -c config.toml

Please note that if you want to be able to use the database you will have to get your own key and put it inside the server.js file in ordere 
to see the full potential of the project.
