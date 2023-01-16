var firebaseConfig = {
    apiKey: "AIzaSyDBqPDiDGAAPd7-y2l886deIOZKVFYAawE",
    authDomain: "letschat-1f8ed.firebaseapp.com",
    databaseURL: "https://letschat-1f8ed-default-rtdb.firebaseio.com",
    projectId: "letschat-1f8ed",
    storageBucket: "letschat-1f8ed.appspot.com",
    messagingSenderId: "537264670561",
    appId: "1:537264670561:web:e08171d6fe954f0ebf2720"
  };
   firebase.initializeApp(firebaseConfig);

function logout() {
    window.location.replace("kwitter.html");
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}

user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
   //Start code
      console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name ;
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
   like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
   
     row = name_with_tag + message_with_tag +like_button + span_with_tag;       
     document.getElementById("output").innerHTML += row;
   //End code
   } });  }); }
   getData();
   
   function updateLike(message_id)
   {
   console.log("clicked on like button - " + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);
   
   firebase.database().ref(room_name).child(message_id).update({
     like : updated_likes  
   });
   
   }
   
   function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location.replace("kwitter.html");
   }
