function validasi(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "bagas31" && password == "gigapurbalingga"){
        document.write("<h1>Login Sukses</h1>");
    }
    else{
        alert("Username / password salah");
        }
    return false;    
}