

window.onload = function(){

	var socket = io.connect('http://localhost:5000');

	socket.on('connect',function(data) {
		console.log(data);
	});

	socket.on('message', function(data){
		console.log(data);
	});

}