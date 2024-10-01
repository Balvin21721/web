// Funcionalidad para cambiar la imagen del producto al subir una nueva
document.getElementById('uploadImg1').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('productImg1').src = e.target.result;
    }
    reader.readAsDataURL(file);
});

document.getElementById('uploadImg2').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('productImg2').src = e.target.result;
    }
    reader.readAsDataURL(file);
});

document.getElementById('uploadImg3').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('productImg3').src = e.target.result;
    }
    reader.readAsDataURL(file);
});

// Funcionalidad de compra
document.getElementById('buyBtn1').addEventListener('click', function() {
    alert('You have purchased the Rugged Sourdough Bread!');
});

document.getElementById('buyBtn2').addEventListener('click', function() {
    alert('You have purchased the Crunchy French Baguette!');
});

document.getElementById('buyBtn3').addEventListener('click', function() {
    alert('You have purchased the Hearty Multigrain Bread!');
});

// Funcionalidad para añadir al carrito
let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} has been added to your cart!`);
    updateCartDisplay();
}

document.getElementById('cartBtn1').addEventListener('click', function() {
    addToCart('Rugged Sourdough Bread', 8);
});

document.getElementById('cartBtn2').addEventListener('click', function() {
    addToCart('Crunchy French Baguette', 5);
});

document.getElementById('cartBtn3').addEventListener('click', function() {
    addToCart('Hearty Multigrain Bread', 7);
});

// Función para actualizar el carrito
function updateCartDisplay() {
    let cartDisplay = 'Items in your cart:\n';
    cart.forEach(item => {
        cartDisplay += `${item.name} - $${item.price}\n`;
    });
    console.log(cartDisplay);
}

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1"];
let currentColorIndex = 0;

function changeLogoColor() {
    const logo = document.querySelector('.logo h1');
    logo.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Ciclo a través del array de colores
}

// Cambia el color cada 1 segundo (1000 milisegundos)
setInterval(changeLogoColor, 1000);
