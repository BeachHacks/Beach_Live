beachLiveApp.controller('hardware_controller', function($window){

  var url = "https://hardware.mlh.io/";

  redirectToURL(url);


  function redirectToURL(url){
    $window.location.href = url;
  }

});
