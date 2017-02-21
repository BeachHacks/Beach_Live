beachLiveApp.controller('announcement_controller', function($scope, data, AngFirebase){
	$scope.content = null;// data.announcement_content();

	AngFirebase.onAnnouncement(function(_announcement){
		$scope.content = _announcement;
		console.log($scope.content);
		$scope.$apply();
	});

});