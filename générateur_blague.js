async function chargerBlague() {
    try {
        const reponse = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await reponse.json();
        document.getElementById('blague').innerText = data.value;
    } catch (erreur) {
        document.getElementById('blague').innerText = "Erreur de chargement de la blague";
    }
}

// Charger une blague au démarrage
chargerBlague();

