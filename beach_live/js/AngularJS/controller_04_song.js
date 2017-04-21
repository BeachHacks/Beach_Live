beachLiveApp.controller('song_controller', function($scope, $http){

  $scope.submitSong = function(){
    //initializing message from attendee
    var message = ":musical_note:" + "\n*Song Title:* " + $scope.title
    + "\n*Artist(s):* " + $scope.artist;

    //initializing payload
    var payload = {
      "text": message,
      "mrkdwn": true
    }
    // POST Request to our mentor Slack channel
    $http({
      method: 'POST',
      url: 'https://hooks.slack.com/services/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',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: payload
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log("sent to slack");
        alert("Thank you. Your song request has been sent to our DJ.")
        $scope.title = "";
        $scope.artist = "";
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("failed to send to slack");
        alert("Uh oh :(. Looks like we had trouble sending your request to our DJ.")
      });
  }

});
