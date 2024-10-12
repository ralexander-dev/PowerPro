/*
 File: domScripts.js (original: scripts.js)
 Author(s): Robert Matias
 Description: 
  This file contains funcionality for DOM manipulation.
 Date Created: 
 Last Modified: 
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Loaded");
});

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column'; // Stack links vertically
}