//soal A1
const tombolCTA = document.querySelector(".cta"); //error yang muncul di console : yang salah ada ('.cta-salah') hal ini karena tidak sesuai dengan kode yang ada di html

tombolCTA.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Terima kasih! Mengarahkan ke halaman pendaftaran...')
});

//soal A2
const cards = document.querySelectorAll('.pricing-card'); //bug '.pricing-cards' kelebihan huruf s
console.log(cards)
console.log('Jumlah paket tersedia: ' + cards.length);
//selector menghasilkan angka yang salah karena .pricing-cards tidak ada dalam kode html, sehingga tidak dapat dibaca

//soal A3
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    cards.forEach(function(c) {
      c.classList.remove('selected');
    });
    card.classList.add('selected'); //dalam classList itu tidak ada property tambah
  });
});

//B1
// const cards = document.querySelectorAll('.pricing-card');
cards.forEach(function(card) {
  card.addEventListener('click', function(){
    const namaPaket = card.querySelector('h3').innerText;
    document.getElementById('pilihan-info').innerText = 
  'Paket dipilih: ' + namaPaket;
  });
});

//B2
const faq = document.querySelectorAll('.faq-item h4');
faq.forEach(function(item){
  item.addEventListener('click', function(){
    const jawaban = this.nextElementSibling;
    jawaban.classList.toggle('visible');
  });
});

//B3
const searchInput = document.getElementById('faq-search');
searchInput.addEventListener('input', function(){
    const keyword = this.value.toLowerCase();
    const items = document.querySelectorAll('.faq-item');

    items.forEach(function(item){
      const judul = item.querySelector('h4').innerText.toLowerCase();

      if (judul.includes(keyword)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }

    })

})



