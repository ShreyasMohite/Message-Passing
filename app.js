const message = () => {
    let message = document.getElementById("message").value;
    document.getElementById("set").innerHTML = message;
    document.getElementById("message").value = "";
}