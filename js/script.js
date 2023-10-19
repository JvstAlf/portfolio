let header = document.getElementById('header')
let info = document.getElementById('info')
let subtitle = document.getElementById('subtitle')
let title = document.getElementById('title')
let navbar = document.getElementById('navbar')
let navbarA = document.querySelectorAll('navbara')
let li1 = document.getElementById('li1')
let li2 = document.getElementById('li2')
let li3 = document.getElementById('li3')
const lis = document.querySelectorAll('li');
let aboutMe = document.getElementById('about-me')
let back = document.getElementById('back')
let front = document.getElementById('front')
let iframe = document.getElementById('iframe')
let carousel1 = document.getElementById('carousel1')
let carousel2 = document.getElementById('carousel2')
let carousel3 = document.getElementById('carousel3')

document.addEventListener('DOMContentLoaded', () => {
  let mousePosX = 0,
      mousePosY = 0,
      mouseCircle = document.getElementById('mouse-circle');

  document.onmousemove = (e) => {
      mousePosX = e.pageX;
      mousePosY = e.pageY;
  }

  let delay = 6,
      revisedMousePosX = 0,
      revisedMousePosY = 0;

  function delayMouseFollow() {
      requestAnimationFrame(delayMouseFollow);

      revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
      revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

      mouseCircle.style.top = revisedMousePosY + 'px';
      mouseCircle.style.left = revisedMousePosX + 'px';
  }
  delayMouseFollow();
});

window.onload = dripping

function dripping() {
    header.style.transform = "translateY(0%)"
}

function toInfo() {
    info.scrollIntoView({
        // behavior : "smooth",
        // block : "end"
    })
}

// elements
var elements_to_watch = document.querySelectorAll('.watch');
// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("in-page");
    } else{
      item.target.classList.remove("in-page");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});

document.addEventListener('scroll', function scr() {
  // console.log(window.scrollY)
  if (window.scrollY >= 700) {
    navbar.style.transform = "translateY(0)"
  } else {
    navbar.style.transform = "translateY(-10rem)"
  }
  if (window.scrollY >+ 1700) {
    li1.style.transition = "0.5s ease"
    li2.style.transition = "0.5s ease"
    li3.style.transition = "0.5s ease"
    li1.style.color = "var(--lilla)"
    li2.style.color = "var(--lilla)"
    li3.style.color = "var(--lilla)"
    lis.forEach((li) => {
      li.style.setProperty('--li-hover', 'rgb(152, 145, 251)');
    });
  } else {
    li1.style.color = "white"
    li2.style.color = "white"
    li3.style.color = "white"
    lis.forEach((li) => {
      li.style.setProperty('--li-hover', 'white');
    });
  }
  if (window.scrollY >+ 2400) {
    li1.style.transition = "0.5s ease"
    li2.style.transition = "0.5s ease"
    li3.style.transition = "0.5s ease"
    li1.style.color = "white"
    li2.style.color = "white"
    li3.style.color = "white"
    lis.forEach((li) => {
      li.style.setProperty('--li-hover', 'white');
    });
  } 
  if (window.scrollY >+ 3400) {
    li1.style.transition = "0.5s ease"
    li2.style.transition = "0.5s ease"
    li3.style.transition = "0.5s ease"
    li1.style.color = "var(--lilla)"
    li2.style.color = "var(--lilla)"
    li3.style.color = "var(--lilla)"
    lis.forEach((li) => {
      li.style.setProperty('--li-hover', 'rgb(152, 145, 251)');
    });
  }
})

function flipAboutMe() {
  aboutMe.vanillaTilt.destroy()
  aboutMe.style.transform = "rotateY(-180deg)"
  aboutMe.style.transition = '1.5s cubic-bezier(.27,.23,.4,1.26)'
  front.style.transition = "0.5s"
  back.style.transition = "0.5s"
  front.style.opacity = "0"
  back.style.opacity = "100"
  back.style.transform = "rotateY(-180deg)"
  setTimeout(() => {
    front.style.display = 'none'
    back.style.display = 'flex'
    setTimeout(() => {
      aboutMe.style.transition = '0s'
      aboutMe.style.transform = "rotateY(0deg)"
      back.style.transition = "0s"
      back.style.transform = "rotateY(0deg)"
      setTimeout(() => {
        VanillaTilt.init(aboutMe)
      }, 100);
    }, 500);
  }, 500);
}

function flipAboutMe2() {
  aboutMe.vanillaTilt.destroy()
  aboutMe.style.transform = "rotateY(180deg)"
  front.style.transition = "0.5s"
  back.style.transition = "0.5s"
  aboutMe.style.transition = '1.5s cubic-bezier(.27,.23,.4,1.26)'
  front.style.opacity = "100"
  front.style.transform = "rotateY(180deg)"
  back.style.opacity = "0"
  setTimeout(() => {
    front.style.display = 'flex'
    back.style.display = 'none'
    setTimeout(() => {
      aboutMe.style.transition = '0s'
      aboutMe.style.transform = "rotateY(0deg)"
      front.style.transition = "0s"
      front.style.transform = "rotateY(0deg)"
      setTimeout(() => {
        VanillaTilt.init(aboutMe)
      }, 100);
    }, 500);
  }, 500);
}

function website1() {
  if (window.innerWidth <= 950) {
    window.open('https://portfolio.alvise.me')
  } else {
    iframe.setAttribute('src', 'https://portfolio.alvise.me')
  }
}

function website2() {
  if (window.innerWidth <= 950) {
    window.open('https://off-white.alvise.me')
  } else {
    iframe.setAttribute('src', 'https://off-white.alvise.me')
    alert('website is unfinished')
  }
}

function website3() {
  if (window.innerWidth <= 950) {
    window.open('https://react-app.alvise.me')
  } else {
    iframe.setAttribute('src', 'https://react-app.alvise.me')
  }
}

// elements
var elements_to_watch = document.querySelectorAll('.watch1');
// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      header.style.transition = "1s";
      header.style.transform = 'translateY(90%)';
      item.target.classList.add('in-page');
    } else{
      header.style.transform = 'translateY(0)';
      item.target.classList.remove('in-page')
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});

function openWebsite() {
  window.open(iframe.src)
}

function openPortfolio() {
  window.open('../images/Portfolio.pdf')
}
