beachLiveApp.controller('mentor_controller', ['$scope', '$http', function($scope, $http, data, AngFirebase, $state){

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

		AngFirebase.writeRequestMentor(request);

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

			var payload = {"text": "Name: " + $scope.name + "\n" + $scope.tableNum + "\n"
			 		+ $scope.selected_radio.option + "\n" + $scope.description
				}


			// POST Request to our mentor Slack channel
			$http({
			  method: 'POST',
			  url: 'https://hooks.slack.com/services/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',
				headers: {
	   			'Content-Type': 'application/x-www-form-urlencoded'
	 			},
	 			data: payload
			}).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
					console.log("sent to slack");
			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
					console.log("failed to send to slack");
			  });

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
}]);
