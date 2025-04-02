async function chargerBlague() {
    try {
        const reponse = await fetch('https://api.chucknorris.io/jokes/random');  // chucknorris le goat ultime
        const data = await reponse.json();
        document.getElementById('blague').innerText = data.value;
    } catch (erreur) {
        document.getElementById('blague').innerText = "Erreur de chargement de la blague";
    }
} // car la vie snas blague est moins drole :(

// Charger une blague au démarrage
chargerBlague();

