/*
 File: domScripts.js (original: scripts.js)
 Author(s): Robert Matias
 Description: 
  This file contains funcionality for DOM manipulation.
 Date Created: 
 Last Modified: 
*/

const lightButton = document.getElementById('lightButton');
const darkButton = document.getElementById('darkButton');
const body = document.body;

lightButton.addEventListener('click', () => { 
  body.classList.replace('darkTheme', 'lightTheme');
});

darkButton.addEventListener('click', () => {
  body.classList.replace('lightTheme', 'darkTheme');
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Loaded");
});

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column'; // Stack links vertically
}