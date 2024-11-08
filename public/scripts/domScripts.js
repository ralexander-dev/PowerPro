/*
 File: domScripts.js (original: scripts.js)
 Author(s): Robert Matias, Russell Alexander
 Description: 
  This file contains funcionality for DOM manipulation.
 Date Created: 
 Last Modified: 10/30/2024
*/

const darkButton = document.getElementById('darkButton');
const lightButton = document.getElementById('lightButton');
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

if(themeBtn) {
  themeBtn.addEventListener('click', () => {
    const theme = body.classList.contains('darkTheme') ? 'lightTheme' : 'darkTheme';
    body.classList.replace(body.classList.contains('darkTheme') ? 'darkTheme' : 'lightTheme', theme);
    localStorage.setItem('theme', theme);
  });
}

if(darkButton) {
  darkButton.addEventListener('click', () => {
    body.classList.replace('lightTheme', 'darkTheme');
    localStorage.setItem('theme', 'darkTheme');
  });
}

if(lightButton) {
  lightButton.addEventListener('click', () => {
    body.classList.replace('darkTheme', 'lightTheme');
    localStorage.setItem('theme', 'lightTheme');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    body.classList.add(theme);
  } else {
    body.classList.add('darkTheme'); // Default theme
  }
  console.log("Website Loaded");
});

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column'; // Stack links vertically
}