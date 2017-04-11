beachLiveApp.controller('announcement_controller', function($scope, data, AngFirebase){
	// $scope.content = null;// data.announcement_content();

	$scope.content = AngFirebase.getAnnouncement();

	// AngFirebase.onAnnouncement(function(_announcement){
	// 	$scope.content = _announcement;
	// 	console.log($scope.content);
	// 	$scope.$apply();
	// });

	// Trigger rerender
	AngFirebase.onAnnouncement(function(){
		$scope.content = AngFirebase.getAnnouncement();
		// console.log($scope.content);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	})

});