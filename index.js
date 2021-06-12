function check() {

    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if (username == "Admin" && password == "Admin") {
        window.location = post = "dash.html";
    }
    else if (username == "" && password == "") {
        document.getElementById("msg").innerText = "Please Enter Your Username And Password";


    }

    else {
        document.getElementById("msg").innerText = "Wrong Username And Password";

    }


}



