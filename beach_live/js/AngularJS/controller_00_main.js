beachLiveApp.controller('main_controller', function($scope, data, AngFirebase, $state){
	$scope.tab = data.tab;
	$scope.data = data;

	$scope.getUrl = function(_page, _url){

		if(_page == 'HARDWARE'){
			return _url;
		}
	}

	$scope.openPage = function(_page){
		if(_page == 'HARDWARE'){
			return "_blank"
		}
	}
});