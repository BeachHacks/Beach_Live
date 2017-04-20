beachLiveApp.controller('admin_schedule_controller', function($scope, data, AngFirebase, $state){

	$scope.schedule = AngFirebase.getSchedule();

	$scope.jsonUrl = 'data:' + AngFirebase.getEncodedSchedule();


	$scope.upload = function(){
		console.log("upload"); 
		var f = document.getElementById('file').files[0],
	      	r = new FileReader();
		r.onloadend = function(e){
			var data = e.target.result;
			AngFirebase.updateSchedule(data);
			//send your binary data via $http or $resource or do anything else with it
		}
		r.readAsBinaryString(f);
		
	}

	AngFirebase.onScheduleChange(function(){
		$scope.schedule = AngFirebase.getSchedule();
		$scope.jsonUrl = 'data:' + AngFirebase.getEncodedSchedule();

		// console.log($scope.content);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	});
});