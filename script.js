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


// ===== # เล่นเพลงหลัง user คลิก =====
document.addEventListener("click", function(){
  const audio = document.querySelector("audio"); // # ดึงแท็ก audio
  if(audio && audio.paused){
    audio.play().catch(()=>{}); // # สั่งเล่นเพลง
  }
});
// ===== # ระบบควบคุมเพลง =====
const audio = document.querySelector("audio");
const btn = document.getElementById("playBtn");
const vol = document.getElementById("vol");

if(audio){

  // # ตั้งค่าเริ่มต้น
  audio.volume = 0.5;
  vol.value = audio.volume;

  // # autoplay workaround (browser บล็อก autoplay)
  document.body.addEventListener("click", ()=>{
    audio.play().catch(()=>{});
  }, {once:true});

  // # ปุ่ม play/pause
  btn.onclick = ()=>{
    if(audio.paused){
      audio.play();
      btn.textContent="⏸";
    }else{
      audio.pause();
      btn.textContent="▶";
    }
  };

  // # slider ปรับเสียง
  vol.oninput = ()=>{
    audio.volume = vol.value;
  };
}

// script.js --- IGNORE ---
