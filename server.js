var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 3000
});

server.start(function(){
	console.log("Server running at: ", server.info.uri);
});

server.register(require('inert'),function(err){
	if(err){
		throw err;
	}
	server.route({
		method: 'GET',
    	path: '/{param*}',
    	handler:{
    		directory:{
    			path:'public'
    		}
    	}
	});
});
