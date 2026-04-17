function navigateAdmin(pageId) {
    document.querySelectorAll('.admin-page').forEach(p => p.classList.add('hidden'));
    document.getElementById(`a-page-${pageId}`).classList.remove('hidden');

    if(pageId === 'inventory') renderAdminBooks();
}

function renderAdminBooks() {
    const list = document.getElementById('admin-book-list');
    list.innerHTML = products.map(p => `
        <div>
            ${p.name} - ${p.price}
        </div>
    `).join('');
}
