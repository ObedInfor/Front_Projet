function searchData() {
    const searchInput = document.getElementById("searchInput").value;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Effacer les résultats précédents
  
    // Exemple d'URL d'API fictive
    const apiUrl = `https://api.example.com/data?search=${searchInput}`;
  
    // Faire une requête à l'API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Traiter les données de l'API
        data.forEach(item => {
          const resultItem = document.createElement("div");
          resultItem.classList.add("result-item");
          resultItem.textContent = item.name; // Supposons que les données de l'API ont une propriété "name"
          resultsDiv.appendChild(resultItem);
        });
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }
  