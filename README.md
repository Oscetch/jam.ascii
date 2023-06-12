# jam.ascii

Made for the [Summer Slow Game Jam](https://itch.io/jam/ssjidle)  

## Preconditions for "building"
* node.js / npm available
* python3 installed

## "Build"

You must first create a directory called `./bundle` and a directory called `./jstemp`.  
Then install the node tool `borwserify` globaly, by run running the command `npm install -g browserify`.  
Then install the typescript transpiler `tsc` globally, by running the command `npm install -g tsc`.  
Then, having the current directory of you terminal as the root folder of this project, run `python bundle.py`.  
You should now have a populated `./bundle` folder which contains a html file. Open the html file in your favorite browser to play

For subsequent build you just run `python bundle.py`
