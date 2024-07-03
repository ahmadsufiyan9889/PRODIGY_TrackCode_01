document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link a');
    const buttons = document.querySelectorAll('.btn');
  
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
      });
  
      link.addEventListener('mouseout', () => {
        link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-light');
      });
    });
  
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color-dark');
      });
  
      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
      });
    });
  });
  