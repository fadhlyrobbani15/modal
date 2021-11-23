const modal= document.getElementById('simplemodal');
const modalBtn= document.getElementById('modalBtn');
const closeBtn= document.querySelector('.closebtn');

modalBtn.addEventListener('click', () =>{
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display='none'
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display='none'
    }
});