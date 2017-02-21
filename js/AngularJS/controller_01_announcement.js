beachLiveApp.controller('announcement_controller', function($scope, data){
	$scope.content = data.anouncement_content;




	/** Announcement Admin **/
	$scope.deleteAnnouncement = function(_index){
		console.log(_index);
	}

	$scope.announce = function(){
		console.log($scope.message)
		$scope.message = "";
	}
});