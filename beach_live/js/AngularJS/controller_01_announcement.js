beachLiveApp.controller('announcement_controller', function($scope, data, AngFirebase, notification){
	// $scope.content = null;// data.announcement_content();

	$scope.content = AngFirebase.getAnnouncement();

	$scope.enableNotification = notification.enableNotification;
	$scope.notificationEnabled = notification.checkEnabled;

	// Trigger rerender
	AngFirebase.onAnnouncement(function(){
		$scope.content = AngFirebase.getAnnouncement();
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	})

});