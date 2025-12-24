// Small helpers for a static site
(function(){
  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // Build date (manually updated when the site is edited)
  var BUILD_DATE = "2025-12-24";
  var els = document.querySelectorAll('[data-build-date]');
  for (var i = 0; i < els.length; i++){
    els[i].textContent = BUILD_DATE;
  }

  // Dynamic age based on DOB: 2008-03-22
  var dob = new Date(Date.UTC(2008, 2, 22)); // months are 0-based
  var now = new Date();
  var age = now.getUTCFullYear() - dob.getUTCFullYear();
  var m = now.getUTCMonth() - dob.getUTCMonth();
  if (m < 0 || (m === 0 && now.getUTCDate() < dob.getUTCDate())) { age--; }
  var a = document.getElementById('age');
  if (a) a.textContent = String(age);

  // Debug
  console.log("Site loaded. Build: " + BUILD_DATE);
})(); 
