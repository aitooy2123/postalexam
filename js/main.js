function switchView(view) {
    document.getElementById('user-system').classList.toggle('hidden', view !== 'user');
    document.getElementById('admin-system').classList.toggle('hidden', view !== 'admin');

    if(view === 'admin') navigateAdmin('dashboard');
}

// INIT
window.onload = () => {
    navigateUser('home');
};
