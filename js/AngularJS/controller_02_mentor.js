beachLiveApp.controller('mentor_controller', function($scope, data, AngFirebase, $state){

	$scope.selected_radio = {
		option : "default"
	}
	$scope.radio_option = ["Web", "iOS", "Android", "VR", "Hardware", "Others"];

	$scope.submit = function(){
		console.log("submit");
		console.log($scope.tableNum);
		console.log($scope.selected_radio.option);
		console.log($scope.description);
	}
});