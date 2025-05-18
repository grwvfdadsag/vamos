const products = [
    { id: 1, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'Mars rug', coins: 100, count: 24 },
    { id: 2, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'Keyboard sticker', coins: 49, count: 11 },
    { id: 3, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'Smart watch', coins: 899, count: 4 },
    { id: 4, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'Wireless keyboard', coins: 350, count: 0 },
    { id: 5, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'Mouse', coins: 359, count: 24 },
    { id: 6, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'AirPods', coins: 499, count: 11 },
    { id: 7, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'Powerbank', coins: 899, count: 5 },
    { id: 8, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'USB flash drive', coins: 299, count: 21 },
    { id: 9, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'Smartphone', coins: 3699, count: 2 },
    { id: 10, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'Playstation 5', coins: 7449, count: 0 }, // oldindan buyurtma
    { id: 11, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: 'Yandex Station', coins: 1999, count: 4 },
    { id: 12, imgUrl: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png', name: ' SamsungPlanshet', coins: 4999, count: 24 }
];
let cards = document.getElementById('cards')
function rendercard(params) {
    let card = document.createElement('div')
    let img = document.createElement('img')
    let name = document.createElement('h3')
    let coins = document.createElement('p')
    let dona = document.createElement('p')
    img.src = `${params?.imgUrl}`
    name.innerHTML = params?.name
    coins.innerHTML = `<img width="20" src="https://www.freeiconspng.com/thumbs/coin-icon/empty-gold-coin-icon-19.jpg" /> ${params?.coins} Coins`
    dona.innerHTML = `${params?.count} dona mavjud`
    card.classList.add('card')
    img.classList.add('card_img')
    card.appendChild(img)
    card.appendChild(name)
    card.appendChild(coins)
    card.appendChild(dona)
    cards.appendChild(card)
}

for (const element of products) {
    rendercard(element)
}

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    cards.innerHTML = ''; 

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    for (const product of filteredProducts) {
        rendercard(product);
    }
});
