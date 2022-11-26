var secret = ["maze", "lost", "storm"]
if (Math.floor(Math.random() * 23) == 23) {
    document.getElementById("emotiocon").innerHTML = secret[Math.floor(Math.random() * secret.length)];
    document.getElementById("emotion").style.backgroundColor = 'Black';
}
