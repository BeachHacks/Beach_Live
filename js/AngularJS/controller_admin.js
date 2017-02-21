beachLiveApp.controller('admin_controller', function($scope, data, AngFirebase, $state){

	$scope.tab = data.tab;
	$scope.data = data;
	$scope.content = data.anouncement_content;
	
	/** Start Script **/

	// kick peple if they are not logged in
	if(!AngFirebase.checkLogin()){
		$state.go("public.announcement");
	}


	$scope.deleteAnnouncement = function(_index){
		console.log(_index);
	}

	$scope.announce = function(){
		AngFirebase.writeAnnouncement($scope.message);
		$scope.message = "";
	}

	$scope.logout = function(){
		AngFirebase.logout();
		$state.go("public.announcement");
	}
});