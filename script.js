const url ="tinkr.tech/sdb/my_wanderworld/wanderworld";
document.getElementById("join").addEventListener("click", async () => {
    const username = document.getElementById("name").value.trim();
 
    if (!username) return;
 
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "join", username })
    });
 
    const data = await res.json();
 
    playerKey = data.player_key;
    myUsername = username;
 
    localStorage.setItem("playerKey", playerKey);
    localStorage.setItem("myUsername", myUsername);

let playerKey = localStorage.getItem("playerKey");
let myUsername = localStorage.getItem("myUsername");
});