beachLiveApp.controller('announcement_controller', function($scope, data, AngFirebase){
	// $scope.content = null;// data.announcement_content();

	$scope.content = AngFirebase.getAnnouncement();

	$scope.notificationEnabled = false;
	
	// Notification 
	$scope.enableNotification = function(){
		console.log("enable notification");
		$scope.notificationEnabled = !$scope.notificationEnabled;

		if (!Notification) {
			alert('Desktop notifications not available in your browser. Try Chromium.'); 
			return;
		}

		if (Notification.permission !== "granted"){
			Notification.requestPermission();
		}
	}

	var notify = function(_annoMsg){

		var index = -1;
		var max_time = 0;
		for(var i = 0; i < _annoMsg.length; i++){
			if(max_time < _annoMsg[i].time){
				max_time = _annoMsg[i].time;
				index = i;
			}
		}

		// console.log(index);
		// console.log(max_time);
		// +/2 20,000
		var currentTime = Math.floor(Date.now());
		var notification = null;
		if ( $scope.notificationEnabled && (max_time >= currentTime - 20000 && max_time <= currentTime + 20000)){
			// Send notify
			console.log("Notify");

			if (!Notification) {
				alert('Desktop notifications not available in your browser. Try Chromium.'); 
				return;
			} else if(Notification.permission === "granted"){
				notification = new Notification('BeachHacks', {
			      icon: 'https://i.imgur.com/yHASg5C.png',
			      body: _annoMsg[index].message,
			    });
			}

			notification.onclick = function () {
		      window.open("https://live.beachhacks.com");      
		    };

		}
	} 

	// Trigger rerender
	AngFirebase.onAnnouncement(function(){
		$scope.content = AngFirebase.getAnnouncement();
		var lastKey = notify($scope.content);
		// console.log(Object.keys($scope.content));
		// fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - 1]]
		// console.log(lastKey);

		// console.log($scope.content);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	})

});