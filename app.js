function goToPage(pageNumber) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById('page' + pageNumber).style.display = 'block';
}
