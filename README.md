# Prerequisites
The script depends on node.js, and it was tested using node.js v6.10.0 and v.7.70
# Instructions
To run the unit tests one shall execute the command: `npm test` \
To run the simulation, one shall execute the command `npm start` or `node index.js`.
This will start the simulation and output the state of Traffic Lights on each change. \
Optionally, you may pass to the script the period (in seconds) to generate the output to: \
`npm start -- 1800` or `node index.js 3600` this will run the simulation for 30 minutes,
and an hour respectively


### Introduction
You are required to provide the code for an application that simulates a set of traffic lights at
an intersection.
The traffic lights are designated (N, S) and (E, W) like a compass.

### Requirements
When switching from green to red, the yellow light must be displayed for 30 seconds prior to
it switching to red. The lights will change automatically every 5 minutes.
You're not required to optimize the solution, just focus on a functional approach to
requirements.
Provide the output for the light changes which occur during a given thirty minute period.
You must provide unit tests for all logic.
Create a repo on bitbucket/github and provide the link as well as instructions on how to run.

## Solution
The TrafficLight and the Intersection are implemented using generator functions
this enabled a laconic implementation. Additionally, there is an implementation
in OOP style, which is also covered by unit tests. \
P.S. The implementations may not be in sync