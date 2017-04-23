beachLiveApp.controller('main_controller', function($scope, data, AngFirebase, $state, notification){
	$scope.tab 		= data.tab;
	$scope.data 	= data;

	$scope.media 	= data.media;
	$scope.curMap 	= "campus";

	/* Controlling nav bar links and routing **/
	$scope.getUrl = function(_page, _url){

		if(_page != _url.toUpperCase()){
			return _url;
		}
	}

	$scope.openPage = function(_page, _url){
		if(_page != _url.toUpperCase()){
			return "_blank";
		}
	}

	/* Controlling Map*/
	$scope.selectMap = function(_map){
		console.log(_map);
		$scope.curMap = _map;
	}
});