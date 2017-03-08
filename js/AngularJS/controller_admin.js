beachLiveApp.controller('admin_controller', function($scope, data, AngFirebase, $state){

	$scope.tab = data.tab;
	$scope.data = data;
	$scope.content = AngFirebase.getAnnouncement();
	// $scope.content = null;
	
	/** Start Script **/

	// kick peple if they are not logged in
	if(!AngFirebase.checkLogin()){
		AngFirebase.logout(); // Just to make sure
		$state.go("public.announcement");
	}


	$scope.delete = function(_key){
		console.log(_key);
		AngFirebase.deleteAnnouncement(_key);
	}

	$scope.announce = function(){
		AngFirebase.writeAnnouncement($scope.message);
		$scope.message = "";
	}

	$scope.logout = function(){
		AngFirebase.logout();
		$state.go("public.announcement");
	}


	// AngFirebase.onAnnouncement(function(_announcement){
	// 	$scope.content = _announcement;
	// 	console.log($scope.content);
	// 	$scope.$apply();
	// });

	AngFirebase.onAnnouncement(function(){
		$scope.content = AngFirebase.getAnnouncement();
		// console.log($scope.content);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	})
});