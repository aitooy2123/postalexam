function navigateUser(pageId) {
    document.querySelectorAll('.user-page').forEach(p => p.classList.add('hidden'));
    document.getElementById(`u-page-${pageId}`).classList.remove('hidden');

    if(pageId === 'stats') renderStats();
    if(pageId === 'shop') renderShop();
    if(pageId === 'exam') resetExamView();
}

function renderStats() {
    const tbody = document.getElementById('stats-table-body');
    tbody.innerHTML = statsData.map(d => `
        <tr>
            <td>${d.year}</td>
            <td>${d.m}</td>
            <td>${d.f}</td>
            <td>${d.m+d.f}</td>
            <td>${d.status}</td>
        </tr>
    `).join('');
}

let cart = 0;

function renderShop() {
    const grid = document.getElementById('shop-grid');
    grid.innerHTML = products.map(p => `
        <div>
            ${p.name} - ${p.price}
            <button onclick="addToCart()">ซื้อ</button>
        </div>
    `).join('');
}

function addToCart() {
    cart++;
    document.getElementById('cart-count').innerText = cart;
}
