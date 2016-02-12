# BinaryOpsDemoAPI
This repository is a sample for [BinaryOps.io](https://binaryops.io). It contains the files
you'd have on your local machine when developing your Backend API using Binaryops.

In order to work with an API on BinaryOps from your local machine, you;ll need to install the cli from the [npm package](https://www.npmjs.com/package/binaryops):

`npm install -g binaryops`

Please note that the cli is still in beta, it will check for version updates and let you know when you need to install a new version.

A binaryops API can be edited by changing the content of the APIDefinition file (DemoApiDefinition.json in this project).
Changes are uploaded to Binaryops using the cli:

	$ binaryops -f DemoApiDefinition.json  -a your_api_code

You will have to substitute your api code that you get from the binaryops dashboard.

Server side functions can be developed and debugged locally using the cli. You need to setup a localConfig.json with the runtime context and parameters for your function. It can then be executed with the cli like this:

	$  binaryops --runlocal localConfig.json

If you have node-inspector installed as well, you can debug and step into your code with the debug break flag:

	$  binaryops --runlocal localConfig.json --debugbrk
