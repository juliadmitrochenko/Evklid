let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let closeBurger = document.querySelector('.close-btn');

burger.addEventListener('click', function() {

    burger.classList.toggle('burger-active');
    menu.classList.toggle('header__nav-active');
    document.body.classList.toggle('stop-scroll');

})

closeBurger.addEventListener('click', function() {
    burger.classList.remove('burger-active');
    menu.classList.remove('header__nav-active');
    document.body.classList.remove('stop-scroll');
}); 


let tabsBtn = document.querySelectorAll('.tabs__btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs__btn-active')});
    e.currentTarget.classList.add('tabs__btn-active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tabs__item-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item-active');
  });
});

document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs__btn').forEach(function(btn){
    btn.classList.remove('tabs__btn-active')});
    e.currentTarget.classList.add('tabs__btn-active');

document.querySelectorAll('.tabs__item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs__item-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item-active');
    });
}); 


document.querySelectorAll('.question__item').forEach((el) => {

  el.addEventListener('click', () => {

    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document.querySelectorAll('.question__descr').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.question__descr').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }

  })
})
