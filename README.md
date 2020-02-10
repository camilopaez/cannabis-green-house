Cannabis green house!

This project is made for having a control over some places where there
are many plants so that an owner's green houses could be monitorized and
the this last could take decisions about the data they see in a web
interface.

Backend structure

![](.//media/image1.png){width="2.3881944444444443in"
height="1.8159722222222223in"}The file skeleton was thought in order to
follow the MVC pattern.

![](.//media/image2.png){width="2.28125in"
height="1.4166666666666667in"}Components: where the controllers are
placed separated by their fuctions.

Config: Where we can found enviroment variables as such used port and
database endpoint dependng on what enviroment is currently spoted to
(development, production or testing )and database
conection.![](.//media/image3.png){width="6.166666666666667in"
height="0.8854166666666666in"}![](.//media/image3.png){width="6.166666666666667in"
height="0.8854166666666666in"}

Models: Where are placed the mongoose schemas so that we can manage the
data

![](.//media/image5.png){width="5.0in" height="2.78125in"}

App: the main app's point, it sets up every component, route, model and
others libraries we can use.

Node\_modules: created components by node engine.

Packages: node's manifest file

Authentication:

Database:

For this project I used mongodb engine but is not running in host but in
Mongo Atlas clouster due to guarantee the app availability.

There are three different enviroment, testing, development and
production.

![](.//media/image6.png){width="6.455555555555556in" height="3.1875in"}
