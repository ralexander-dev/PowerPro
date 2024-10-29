/*
 File: domScripts.js (original: scripts.js)
 Author(s): Robert Matias
 Description: 
  This file contains funcionality for DOM manipulation.
 Date Created: 
 Last Modified: 
*/

darkButton = document.getElementById('darkButton');
lightButton = document.getElementById('lightButton');
body = document.body;

darkButton.addEventListener('click', () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
});

lightButton.addEventListener('click', () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Loaded");
});

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column'; // Stack links vertically
}