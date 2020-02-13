# Cannabis green house!

This project is made for having a control over some places where there
are many plants so that an owner's green houses could be monitorized and
the this last could take decisions about the data they see in a web
interface.

# Backend structure

![](.//media/image1.png)
The file skeleton was thought in order to
follow the MVC pattern.

![](.//media/image2.png)
Components: where the controllers are
placed separated by their fuctions.

## Config:
Where we can found enviroment variables as such used port and
database endpoint dependng on what enviroment is currently spoted to
(development, production or testing )and database
conection.![](.//media/image3.png)
![](.//media/image3.png)

## Models: 
Where are placed the mongoose schemas so that we can manage the
data

![](.//media/image5.png)

## App: 
the main app's point, it sets up every component, route, model and
others libraries we can use.

## Node\_modules: 
created components by node engine.

## Packages: 
node's manifest file

## Authentication:
Was used JWT so that we generate the token access and we send it with
the data request.
![](.//media/image6.png)

## Database:
For this project I used mongodb engine but is not running in host but in
Mongo Atlas clouster due to guarantee the app availability.

There are three different enviroment, testing, development and
production.
![](.//media/image7.png)

# Regard to the require questions

## ¿What technology was used?

### Back-End
Was used node in its 8 version with the structure described above.  

### Front-End
Was used React.js

## Which are the API service specifications in the back-end side? 
Were created three different components that are related to some functionalities such as 
registering users, authenticating users and getting plants information in real time (simulated)

## How was implemented the user authentication?
Was used JWT strategic as it was showed in the image avobe.

## Which were the main difficulties found while building the app? 

### Technology unknowledge
The main issue regard to the used technology was the use of a front-end framework,
since others projects in the past were made througtout template engines as ejs or jade

### What concepts weren't known to make the project?
Restful API request and how to build the app architecture

### What skills or concepts are  missing to get the project over?
None

### What was missing to get the project over?
None

