
/** Initialize Firebase SDK **/
// Need to config to firebase server config
<script>
  // Initialize the Firebase SDK
  var config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
  };
  firebase.initializeApp(config);
</script>



var app = angular.module("beachLive", ["firebase"]);