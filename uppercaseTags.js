/**
* Sample function on the BinaryOps.io sample API.
*
* This function is setup to be called as the pre-save function
* on the 'post' entity. (Blog Post). It converts the inbound tags
* to upper case and returns the completed post document,
* so it can be persisted.
*/

function main(apiclient, args, context) {

  if (args.tags) {
	  args.tags = args.tags.toUpperCase();
  }

  context.succeed(args); //return the whole object for persisting.

}

module.exports = main;
