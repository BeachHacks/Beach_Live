beachLiveApp.controller('schedule_controller', function($scope, data, AngFirebase, $state){

	var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']; // Need to be refactor and move the service
	var day = ['SUN'];

	var getDate = function(_strDate){
		dateTimeParts = _strDate.split(' ');
		timeParts = dateTimeParts[1].split(':');
		dateParts = dateTimeParts[0].split('-');

		return new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);
	}

	var start_time = getDate("22-04-2017 10:00");
	var end_time = getDate("23-04-2017 15:00");

	console.log(start_time.getTime());
	console.log(start_time);
	console.log(start_time.getDate());
	console.log(start_time.getDay());
	console.log(start_time.getMonth())
	console.log(start_time.getHours());
	console.log(start_time.getMinutes())

});