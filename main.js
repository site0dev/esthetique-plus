document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery");
  const totalPhotos = 78;
  const phoneNumber = "22994870650"; // Numéro WhatsApp

  // Génération dynamique des 78 images depuis la racine
  for (let i = 1; i <= totalPhotos; i++) {
    const card = document.createElement("div");
    card.className = "bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group";

    // Message pré-rempli pour WhatsApp
    const messageWhatsApp = encodeURIComponent(
      `Bonjour Esthétique Plus, je suis intéressé(e) par la réalisation N°${i}. Pouvez-vous me donner plus de détails ?`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${messageWhatsApp}`;

    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[4/3] bg-gray-100">
        <img src="${i}.jpg" 
             alt="Réalisation ${i} - Esthétique Plus" 
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             loading="lazy"
             onerror="
               if (this.src.endsWith('.jpg')) { this.src = '${i}.jpeg'; }
               else if (this.src.endsWith('.jpeg')) { this.src = '${i}.png'; }
               else if (this.src.endsWith('.png')) { this.src = '${i}.JPG'; }
               else if (this.src.endsWith('.JPG')) { this.src = '${i}.PNG'; }
             ">
        <span class="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full shadow">
          N°${i}
        </span>
      </div>
      
      <div class="p-4 flex flex-col flex-grow justify-between bg-white">
        <div>
          <h3 class="font-bold text-gray-900 text-base mb-1">Réalisation #${i}</h3>
          <p class="text-xs text-gray-500 mb-4">Création sur-mesure par l'atelier Esthétique Plus.</p>
        </div>
        
        <a href="${whatsappUrl}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="w-full inline-flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition shadow-sm">
          <i class="fab fa-whatsapp text-sm"></i>
          <span>Commander</span>
        </a>
      </div>
    `;

    galleryContainer.appendChild(card);
  }
});