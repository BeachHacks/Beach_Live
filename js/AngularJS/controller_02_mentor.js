beachLiveApp.controller('mentor_controller', function($scope, data, AngFirebase, $state){

	$scope.requestList = AngFirebase.getRequestList();

	$scope.selected_radio = {
		option : "default"
	}
	$scope.radio_option = ["Web", "iOS", "Android", "VR", "Hardware", "Others"];

	$scope.submit = function(){
		// console.log("submit");
		// console.log($scope.tableNum);
		// console.log($scope.selected_radio.option);
		// console.log($scope.description);
		// console.log($scope.name);
		var request = {
			name	: $scope.name,
			table 	: $scope.tableNum,
			tech 	: $scope.selected_radio.option,
			des 	: $scope.description
		}

		AngFirebase.writeRequestMentor(request);
	}


	// Trigger rerender
	AngFirebase.onMentorChange(function(){
		$scope.requestList = AngFirebase.getRequestList();
		// console.log($scope.content);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	});
});