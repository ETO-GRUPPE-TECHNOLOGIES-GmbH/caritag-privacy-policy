document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const contentDiv = document.getElementById("content");
    const titleElement = document.getElementById("policy-title");
    // const descriptionElement = document.getElementById("policy-description");
    const contentElement = document.getElementById("policy-content");

    const apiUrl = "https://consent.farmunited.com/api/version/v2/latestVersion?projectId=2"; // Replace with actual API URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLang = urlParams.get("lang") || "EN"; // Default to English if no lang param
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            loader.style.display = "none"; // Hide loader
            contentDiv.style.display = "block"; // Show content

            const privacyPolicy = data.documents.find(doc =>
                doc.title.some(titleObj => titleObj.content.toLowerCase() === "privacy policy")
            );

            if (privacyPolicy) {
                const titleObj = privacyPolicy.title.find(t => t.language === selectedLang) || privacyPolicy.title[0];
                const descObj = privacyPolicy.description.find(d => d.language === selectedLang) || privacyPolicy.description[0];
                const htmlObj = privacyPolicy.htmlContent.find(h => h.language === selectedLang) || privacyPolicy.htmlContent[0];

                titleElement.textContent = titleObj.content;
                // descriptionElement.textContent = descObj.content;
                contentElement.innerHTML = htmlObj.content;
            } else {
                titleElement.textContent = "No Content Found";
                // descriptionElement.textContent = "Sorry, there are no Privacy Policy available.";
                contentElement.innerHTML = "Sorry, there are no Privacy Policy available.";
            }
        })
        .catch(error => {
            loader.style.display = "none";
            contentDiv.style.display = "block";
            titleElement.textContent = "Error";
            // descriptionElement.textContent = "Failed to load content.";
            console.error("Error fetching data:", error);
        });
});
