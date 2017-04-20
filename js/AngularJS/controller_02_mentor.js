beachLiveApp.controller('mentor_controller', function($scope, data, AngFirebase, $state){

	$scope.requestList = AngFirebase.getRequestList();

	$scope.name 					= null;
	$scope.tableNum 				= null;
	$scope.description 				= null;
	$scope.selected_radio = {
		option : "default"
	}

	$scope.incomplete 				= false;

	$scope.loading 					= false;


	$scope.radio_option = ["Web", "iOS", "Android", "VR", "Hardware", "Others"];

	$scope.submit = function(){

		/* Check for Complete Form */
		
		if ( ($scope.name == null || $scope.name.length < 1) || ($scope.tableNum == null || $scope.tableNum < 0) ||
		 ($scope.selected_radio.option == 'default') || ($scope.description == null || $scope.description.length < 1) ){
			$scope.incomplete = true;
		} else {
			var request = {
				name	: $scope.name,
				table 	: $scope.tableNum,
				tech 	: $scope.selected_radio.option,
				des 	: $scope.description,
				status	: false
			}

			// Reset
			$scope.incomplete 				= false;
			$scope.name 					= null;
			$scope.tableNum 				= null;
			$scope.selected_radio.option 	= 'default';
			$scope.description 				= null

			$scope.loading = true;
			AngFirebase.writeRequestMentor(request).then(function(){
				$scope.loading = false;
				$scope.$apply();
			});
		}
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