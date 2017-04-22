beachLiveApp.controller('mentor_controller', function($scope, data, AngFirebase, $state, $http){

	$scope.requestList = AngFirebase.getRequestList();

	$scope.name 					= null;
	$scope.tableNum 				= null;
	$scope.description 				= null;
	$scope.selected_radio = {
		option : "default"
	}

	$scope.incomplete 				= false;
	$scope.loading 					= false;
	$scope.recentAccept 			= AngFirebase.getTopAccepted(5);


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

			//initializing message from attendee
			var message = ":star::star::star:" + "\n*Name:* " + $scope.name + "\n*Table Number:* " + $scope.tableNum +
				"\n*Tech* : " + $scope.selected_radio.option + "\n*Description:* " + $scope.description
				+ "\n:star::star::star:";

			//initializing payload
			var payload = {
				"text": message,
				"mrkdwn": true
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

		$scope.recentAccept = AngFirebase.getTopAccepted(5);
		// console.log($scope.content);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	});

});
