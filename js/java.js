const facebookLink = document.querySelector('.fa-facebook-official');
facebookLink.href = 'https://www.facebook.com/ONGMundoPatitas/?locale=es_LA'
const socialLinks = document.querySelectorAll('.social_media a');
socialLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(link.href, 'https://www.facebook.com/ONGMundoPatitas/?locale=es_LA');
  });
}); 

const instagramLink = document.querySelector('.fa-instagram');
instagramLink.href = 'https://www.instagram.com/ongmundopatitas/'

instagramLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.open(instagramLink.href, '_blank');
});

const emailLink = document.querySelector('.fa-envelope');
emailLink.href = 'ongmundopatitas@hotmail.com';