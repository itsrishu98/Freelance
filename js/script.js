document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav');
 if(toggle&&nav) toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
 const form=document.querySelector('#contact-form');
 if(form) form.addEventListener('submit',e=>{e.preventDefault();let valid=true;form.querySelectorAll('[required]').forEach(field=>{const error=field.closest('.field').querySelector('.error');if(!field.value.trim()||(field.type==='email'&&!field.validity.valid)){error.textContent=field.validationMessage||'Please complete this field.';valid=false}else error.textContent=''});if(valid){form.querySelector('.form-status').textContent='[PLACEHOLDER] Thanks — your request has been captured for demo purposes.';form.reset()}});
});
