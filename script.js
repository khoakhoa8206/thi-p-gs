// --- Card & Name input ---
const card = document.getElementById("card");
const nameScreen = document.getElementById("nameScreen");
const openBtn = document.getElementById("openCardBtn");
const nameInput = document.getElementById("nameInput");
const userName = document.getElementById("userName");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (!name) {
    alert("Hãy nhập tên trước nhé 🎄");
    return;
  }

  // Gán tên vào thiệp
  userName.textContent = name;

  // Ẩn màn hình nhập tên
  nameScreen.style.display = "none";

  // Mở thiệp
  card.classList.add("open");

  // Phát nhạc (bắt buộc click mới phát trên mobile)
  music.play().catch(() => {});
});

// --- Music toggle ---
const toggle = document.getElementById("musicToggle");
let playing = false;

toggle.addEventListener("click", () => {
  playing ? music.pause() : music.play();
  playing = !playing;
  toggle.textContent = playing ? "🔊" : "🔇";
});

// --- Snow animation (ví dụ đơn giản) ---
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const particles = [];
const icons = ["❄","🍬","🍪","❤"];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    s: Math.random() * 0.5 + 0.5,
    icon: icons[Math.floor(Math.random() * icons.length)]
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.font = "16px serif";

  particles.forEach(p => {
    ctx.fillText(p.icon, p.x, p.y);
    p.y += p.s;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();
