beachLiveApp.controller('hardware_controller', function($window){

  var url = "https://hardware.mlh.io/";

  redirectToURL(url); //run on page load

  function redirectToURL(url){
    //opens an new tab for the hardware link
    window.open(url, '_blank');
  }

});
