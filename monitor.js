const SERVER = "NexusMC.dere.pics";

async function checkServer() {
    try {
        const response = await fetch(
            `https://api.mcsrvstat.us/3/${SERVER}`
        );

        const data = await response.json();

        if (data.online) {
            console.log("🟢 NexusMC ONLINE");
            console.log("Oyunçular:", data.players.online);
        } else {
            console.log("🔴 NexusMC OFFLINE");
        }
    } catch (error) {
        console.log("Xəta:", error.message);
    }
}

console.log("NexusMC Monitor başladıldı!");

checkServer();
setInterval(checkServer, 60000);