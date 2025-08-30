// Simple helpers
document.getElementById('year')?.append(document.createTextNode(new Date().getFullYear()));

// Respect reduced motion and keep it simple. No dark mode switch to avoid conflicts.
// Last build time stamp:
console.log("Site loaded 2025-08-30");


// Dynamic age based on DOB: 2008-03-22
(function(){
  var dob = new Date(Date.UTC(2008, 2, 22)); // months are 0-based
  var now = new Date();
  var age = now.getUTCFullYear() - dob.getUTCFullYear();
  var m = now.getUTCMonth() - dob.getUTCMonth();
  if (m < 0 || (m === 0 && now.getUTCDate() < dob.getUTCDate())) { age--; }
  var el = document.getElementById('age');
  if (el) el.textContent = age.toString();
})();
