Cannabis green house!

This project is made for having a control over some places where there
are many plants so that an owner's green houses could be monitorized and
the this last could take decisions about the data they see in a web
interface.

Backend structure

![](.//media/image1.png)
The file skeleton was thought in order to
follow the MVC pattern.

![](.//media/image2.png)
Components: where the controllers are
placed separated by their fuctions.

Config: Where we can found enviroment variables as such used port and
database endpoint dependng on what enviroment is currently spoted to
(development, production or testing )and database
conection.![](.//media/image3.png)!
[](.//media/image3.png)

Models: Where are placed the mongoose schemas so that we can manage the
data

![](.//media/image5.png)

App: the main app's point, it sets up every component, route, model and
others libraries we can use.

Node\_modules: created components by node engine.

Packages: node's manifest file

Authentication:

Was used JWT so that we generate the token access and we send it with
the data request.

![](.//media/image6.png)

Database:

For this project I used mongodb engine but is not running in host but in
Mongo Atlas clouster due to guarantee the app availability.

There are three different enviroment, testing, development and
production.

![](.//media/image7.png)
