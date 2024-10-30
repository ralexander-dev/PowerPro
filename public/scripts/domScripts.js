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
const body = document.body;

if(darkButton) {
  darkButton.addEventListener('click', () => {
    body.classList.replace('lightTheme', 'darkTheme');
    localStorage.setItem('theme', 'darkTheme');
  });
}

if (lightButton) {
  lightButton.addEventListener('click', () => {
    body.style.transition = 'background-color 1s';
    body.style.transition = 'color 1s';
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