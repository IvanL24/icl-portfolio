const bio = document.getElementById('bio');
const contact = document.getElementById('contact');
const container = document.getElementById('container');
const text = document.getElementById('text');
const body = document.getElementById('body');

const about = document.getElementById('about');
const form = document.getElementById('form');

const return1 = document.getElementById('return1');
const return2 = document.getElementById('return2');

// event listener after clicking about 
bio.addEventListener('click', function(event){


  body.style.backgroundColor = 'rgb(131, 132, 140)';
  body.style.justifyContent = 'center';
  container.style.display = 'none';
  text.style.display = 'none';
  about.style.display = 'grid';
  about.style.backgroundColor = '#8F94A6';

});

// event listener after clicking contact 
contact.addEventListener('click', function(event){


  body.style.backgroundColor = 'rgb(131, 132, 140)';
  container.style.display = 'none';
  text.style.display = 'none';
  body.style.justifyContent = 'center';
  form.style.display = 'grid';
  form.style.alignSelf = 'center';
  form.style.backgroundColor = '#8F94A6'

});

// event listener after clicking the "X" button

return1.addEventListener('click', function(event){

  // for about
  body.style.backgroundColor = ' #8F94A6';
  container.style.display = 'grid';
  text.style.display = 'grid';
  // body.style.justifyContent = 'center';
  about.style.display = 'none';
  // about.style.backgroundColor = '#8F94A6'

})

return2.addEventListener('click', function(event){

  // for contact
  body.style.backgroundColor = ' #8F94A6';
  container.style.display = 'grid';
  text.style.display = 'grid';
  // body.style.justifyContent = 'center';
  form.style.display = 'none';
  // form.style.alignSelf = 'center';
  // form.style.backgroundColor = '#8F94A6'
})

