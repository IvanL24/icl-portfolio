const bio = document.getElementById('bio');
const contact = document.getElementById('contact');
const container = document.getElementById('container');
const text = document.getElementById('text');
const body = document.getElementById('body');

bio.addEventListener('click', function(event){

  let about = document.getElementById('about');


  container.style.display = 'none';
  text.style.display = 'none';
  about.style.display = 'grid';
  body.style.justifyContent = 'center';

});

contact.addEventListener('click', function(event){

  let form = document.getElementById('form');

  container.style.display = 'none';
  text.style.display = 'none';
  form.style.display = 'grid';
  body.style.justifyContent = 'center';
  form.style.alignSelf = 'center';

})

