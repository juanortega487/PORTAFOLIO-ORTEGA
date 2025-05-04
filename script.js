const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const colorBtn = document.getElementById("colorBtn");
const navLinks = document.querySelectorAll('.nav-link');

menuBtn.addEventListener("click", () => {
  navbar.querySelector("ul").classList.toggle("active");
});

colorBtn.addEventListener("click", () => {
  const bgColor = getRandomColor();
  const textColor = getContrastColor(bgColor);
  
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
  
  document.documentElement.style.setProperty('--line-color', getRandomColor());
  document.documentElement.style.setProperty('--navbar-bg-color', bgColor);
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('nav ul li a');
  
    menuLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.color = getRandomColor();
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.color = ''; 
      });
    });

    const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    titles.forEach(title => {
      title.addEventListener('mouseenter', () => {
        title.style.color = getRandomColor();
      });
  
      title.addEventListener('mouseleave', () => {
        title.style.color = '';
      });
    });
    
    const sections = ['projects', 'contact'];
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {

        const elementsInSection = section.querySelectorAll('p, a, h1, h2, h3, h4, h5, h6');
        
        elementsInSection.forEach(element => {
          element.addEventListener('mouseenter', () => {
            element.style.color = getRandomColor();
          });
  
          element.addEventListener('mouseleave', () => {
            element.style.color = '';
          });
        });
      }
    });

    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = getRandomColor();
      });
      card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '';
      });
    });
});

function getContrastColor(hexcolor) {
  hexcolor = hexcolor.replace("#", "");
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
}