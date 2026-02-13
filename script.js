// ===== Programming Skill Bars =====
document.querySelectorAll('.skills-prog li').forEach(function(skill){
  var percent = skill.getAttribute('data-percent'); // # เปลี่ยนเปอร์เซ็นต์ skill ใน HTML
  skill.querySelector('.bar').style.width = percent + '%';
});

// ===== Circular Skill Charts =====
document.querySelectorAll('.skills-soft li').forEach(function(skill){
  var percent = skill.getAttribute('data-percent'); // # เปลี่ยนเปอร์เซ็นต์วงกลมใน HTML
  var circle = skill.querySelector('.cbar');

  var radius = circle.getAttribute('r'); // # แก้รัศมีวงกลมได้ใน HTML (r="45")
  var circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;

  var offset = circumference - (percent / 100 * circumference); // # คำนวณความยาวเส้นตาม %
  circle.style.strokeDashoffset = offset;
});
