var firebaseConfig = {
    apiKey: "AIzaSyADJT3uhnjAE2C0ecIGsxYW7woOiY436vY",
    authDomain: "kwitter-e9dea.firebaseapp.com",
    databaseURL: "https://kwitter-e9dea-default-rtdb.firebaseio.com",
    projectId: "kwitter-e9dea",
    storageBucket: "kwitter-e9dea.appspot.com",
    messagingSenderId: "609215504311",
    appId: "1:609215504311:web:9646898eb59db3ed555232"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage,getItem("user_name");
  room_name = localStorage,getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    //Start code
    
    //End code
    } });  }); }
getData();

  function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

   document.getElementById("msg").value = "";
}