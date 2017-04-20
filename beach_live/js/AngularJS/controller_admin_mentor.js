/* controller_admin_mentor.js */

beachLiveApp.controller('admin_mentor_controller', function($scope, data, AngFirebase, $state){

	$scope.requestList = AngFirebase.getRequestList();

	$scope.convertTime = function(_timestamp){

		return convertTime(_timestamp);
	}

	$scope.accept = function(_key, _mentor){
		AngFirebase.acceptRequest(_key, _mentor);
	}

	$scope.cancel = function(_key){
		AngFirebase.deleteRequest(_key);
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