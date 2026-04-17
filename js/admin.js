function navigateAdmin(pageId) {
    document.querySelectorAll('.admin-page').forEach(p => p.classList.add('hidden'));
    document.getElementById(`a-page-${pageId}`).classList.remove('hidden');

    document.querySelectorAll('aside nav button').forEach(b => b.classList.remove('active-admin-nav'));
    document.getElementById(`a-nav-${pageId}`).classList.add('active-admin-nav');
}
