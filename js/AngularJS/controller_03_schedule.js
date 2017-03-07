beachLiveApp.controller('schedule_controller', function($scope, data, AngFirebase, $state){
	$scope.test = "hello world";
	var TIME_START 	= "2017.4.22.9";
	var TIME_END 	= "2017.4.23.12";


	console.log(arrayOfHour(TIME_START, TIME_END));
});


function arrayOfHour(_start, _end){
	var arr = []
}