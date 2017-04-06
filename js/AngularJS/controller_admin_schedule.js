beachLiveApp.controller('admin_schedule_controller', function($scope, data, AngFirebase, $state){

	$scope.schedule = null;

	var jsobObj = { name: 'Michelle', age: 1 };
	var jsonData = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsobObj));


	$scope.jsonUrl = 'data:' + jsonData;


	$scope.upload = function(){
		AngFirebase.updateSchedule($scope.schedule);
	}

	AngFirebase.onScheduleChange(function(){
		$scope.schedule = AngFirebase.getSchedule();
		// console.log($scope.content);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	});
});