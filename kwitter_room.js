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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


   function login() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        username: "name"
    });
}

function addroom()
{
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}