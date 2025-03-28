// Produktdata
const products = [
    {
        name: "Standardkasse",
        price: "1.299 kr",
        description: "For 1 person i 3 dager",
        features: [
            "Vannrensetabletter (400L)",
            "9.000 kcal tørrmat",
            "Komplett førstehjelpssett",
            "3 nødlys + lommelykt"
        ],
        image: "bilder/standard.jpg"
    },
    // Legg til familie- og premiumkasser her
];

// Bygg produktoversikt
function renderProducts() {
    const container = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <ul class="product-features">
                ${product.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="price">${product.price}</div>
            <button onclick="scrollToForm()">Bestill nå</button>
        `;
        container.appendChild(card);
    });
}

// Bygg skjema
function renderForm() {
    const form = document.getElementById('bestillingsform');
    form.innerHTML = `
        <input type="hidden" name="_next" value="takk.html">
        <input type="hidden" name="_subject" value="Ny bestilling">
        
        <div class="form-group">
            <label for="name">Fullt navn:</label>
            <input type="text" id="name" name="name" required>
        </div>
        
        <!-- Legg til resten av feltene -->
        
        <button type="submit">Fullfør bestilling</button>
    `;
}

// Initialiser
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderForm();
});
