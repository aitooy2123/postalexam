// USER NAV
function goPage(page) {
    document.querySelectorAll("main section").forEach(s => s.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}

// ADMIN NAV
function goAdmin(page) {
    document.querySelectorAll("main section").forEach(s => s.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}
