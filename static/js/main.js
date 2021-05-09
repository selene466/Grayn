const switchTheme = document.querySelector('#switchTheme');
const html = document.querySelector('html');
const menuToggle = document.querySelector('#menu-toggle');
const menuList = document.querySelector('#menu-list');
const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const searchInputForm  = searchInput.querySelector('form')
const toTop = document.querySelector('#to-top');
const main = document.querySelector('#main');

switchTheme.addEventListener('click',function (e) {
  const iconMoon = './assets/icons/icon_moon.svg'
  const iconSun = './assets/icons/icon_sun.svg'

  if(e.target.classList.contains('image-switch')){
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      e.target.src = iconMoon
    } else {
      html.classList.add('dark')
      e.target.src = iconSun
    }
  }
});

menuToggle.addEventListener('click',function () {
  const menuClose = './assets/icons/close_menu.svg'
  const menuOpen = './assets/icons/toggle_menu.svg'

  if (menuList.classList.contains('hidden')) {
    menuList.classList.remove('hidden')
    setTimeout(() => {
      menuToggle.src = menuClose
      menuList.classList.remove('opacity-0')
    }, 100);  
  } else {
    menuToggle.src = menuOpen
    menuList.classList.add('opacity-0')
    setTimeout(() => {
      menuList.classList.add('hidden')
    }, 350);
  }
});

searchButton.addEventListener('click',function () {
  searchInput.classList.remove('hidden')
  setTimeout(() => {
    console.log(searchInputForm)
    searchInputForm.classList.remove('-translate-y-full')
  }, 100);
});

searchInput.addEventListener('click',function (e) {
  e.stopPropagation()
  if(e.target.id == 'search-input'){
    searchInputForm.classList.add('-translate-y-full')
    setTimeout(() => {
      e.target.classList.add('hidden')
    }, 150);
  }
});


window.onscroll = () => {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    toTop.classList.remove('bottom-full')
    toTop.classList.add('bottom-24')
  } else {
    toTop.classList.remove('bottom-24')
    toTop.classList.add('bottom-full')
  }
}

toTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
});