beachLiveApp.controller('admin_schedule_controller', function($scope, data, AngFirebase, $state){

	$scope.schedule = AngFirebase.getSchedule();

	var jsonData = "";


	$scope.jsonUrl = "";


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
		jsonData = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify($scope.schedule, undefined, 2));
		$scope.jsonUrl = 'data:' + jsonData;
		// console.log($scope.content);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	});
});