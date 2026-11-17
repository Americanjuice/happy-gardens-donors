function toggleNav(b){var n=document.getElementById('nav');var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);}
document.querySelectorAll('#nav a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('nav').classList.remove('open');});});
var cfg=window.HG||{};
if(!window.HG_REVIEW_MODE){var rb=document.getElementById('reviewBanner');if(rb)rb.remove();document.body.classList.add('no-review');}
document.querySelectorAll('.ph').forEach(function(el){
  var src=el.getAttribute('data-src');
  if(src){el.style.backgroundImage='url('+src+')';el.classList.add('has-img');}
  else if(window.HG_REVIEW_MODE&&el.getAttribute('data-photo')){var s=document.createElement('span');s.className='ph-label';s.textContent='Photo needed from Lydia: '+el.getAttribute('data-photo');el.appendChild(s);}
});
document.querySelectorAll('[data-pay]').forEach(function(a){
  if(cfg.paymentLink){a.href=cfg.paymentLink;a.target='_blank';a.rel='noopener';}
  else{a.href='#donate-form';}
});
document.querySelectorAll('[data-email]').forEach(function(a){a.href='mailto:'+cfg.donorEmail;a.textContent=cfg.donorEmail;});
document.querySelectorAll('[data-interest]').forEach(function(a){a.addEventListener('click',function(){var s=document.getElementById('f-interest');if(s){s.value=a.getAttribute('data-interest');}});});
var f=document.getElementById('donate-form-el');
if(f){f.addEventListener('submit',function(e){e.preventDefault();
  var g=function(id){return (document.getElementById(id)||{}).value||'';};
  var body='Name: '+g('f-name')+'\nEmail: '+g('f-email')+'\nCountry: '+g('f-country')+'\nI would like to: '+g('f-interest')+'\n\n'+g('f-msg');
  window.location.href='mailto:'+cfg.donorEmail+'?subject='+encodeURIComponent('Supporting Happy Gardens ('+g('f-country')+')')+'&body='+encodeURIComponent(body);
});}
