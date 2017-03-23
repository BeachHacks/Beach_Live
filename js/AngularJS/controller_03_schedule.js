beachLiveApp.controller('schedule_controller', function($scope, data, AngFirebase, $state){

	var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']; // Need to be refactor and move the service
	var day = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];

	var start_time = "22-04-2017 10:00";
	var end_time = "23-04-2017 15:00";

	var getDate = function(_strDate){
		dateTimeParts = _strDate.split(' ');
		timeParts = dateTimeParts[1].split(':');
		dateParts = dateTimeParts[0].split('-');

		return new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);
	}

	var formatTime = function(_hour){
		var formatHour = "";

		var dd = "am";
		var h = _hour;
		if (h >= 12) {
			h = _hour - 12;
			dd = "pm";
		}
		if (h == 0) {
			h = 12;
		}

		h = h<10?"0"+h:h;
		return h + dd;
	}

	var createScheduleHour = function(_start, _end){
		var schedule = [];

		var date_start = getDate(_start);
		var date_end 	= getDate(_end);

		for(var i = date_start.getTime(); i < date_end.getTime(); i += 3600000){
			var newDate = new Date(i);
			var d = {};
			d['month'] 	= month[newDate.getMonth()];
			d['date'] 	= newDate.getDate();
			d['day'] 	= day[newDate.getDay()];
			d['hour']	= formatTime(newDate.getHours());

			// console.log(newDate.getDate() + " " + newDate.getDay() + " " + newDate.getHours() + " " + newDate.getMinutes());
			schedule.push(d);
		}

		return schedule;
	}

	$scope.schedule = createScheduleHour(start_time, end_time);

});