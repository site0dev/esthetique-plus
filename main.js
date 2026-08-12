document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const whatsappNumber = "22994870650";
  const totalProjects = 80;

  if (!gallery) return;

  for (let i = 1; i <= totalProjects; i++) {
    const card = document.createElement('div');
    card.className = "project-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between";

    const encodedMessage = encodeURIComponent(`Bonjour Esthétique Plus, je souhaite commander / avoir un devis pour la réalisation N°${i}.`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    card.innerHTML = `
      <div>
        <div class="img-container relative bg-gray-200">
          <img src="images/${i}.jpg" 
               alt="Réalisation Esthétique Plus ${i}" 
               loading="lazy" 
               onerror="
                 if (this.src.endsWith('.jpg')) { this.src = 'images/${i}.JPG'; }
                 else if (this.src.endsWith('.JPG')) { this.src = 'images/${i}.jpeg'; }
                 else if (this.src.endsWith('.jpeg')) { this.src = 'images/${i}.png'; }
                 else if (this.src.endsWith('.png')) { this.src = 'images/${i}.PNG'; }
                 else { this.onerror=null; this.src='https://placehold.co/600x400/1f2937/ffffff?text=Image+${i}'; }
               ">
        </div>
      </div>
      <div class="p-4">
        <a href="${whatsappLink}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="w-full inline-flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition active:scale-95 shadow-sm">
          <i class="fab fa-whatsapp text-lg"></i>
          <span>Commander</span>
        </a>
      </div>
    `;

    gallery.appendChild(card);
  }
});