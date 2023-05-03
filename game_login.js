
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function

	  //Set "player2_name" using localStorage.setItem() function

    localStorage.setItem("name", "player1")

    localStorage.setItem("name", "player2")

    window.location = "game_page.html";
}

