const openInvitation = document.getElementById('openInvitation');
const cover = document.getElementById('cover');
const invitation = document.getElementById('invitation');
const weddingMusic = document.getElementById('weddingMusic');
const toggleMusic = document.getElementById('toggleMusic');
const musicIcon = document.getElementById('musicIcon');
const toggleBtn = document.getElementById('toggleGift');
const giftCard = document.getElementById('giftCard');
const copyBtn = document.getElementById('copyBtn');
const rekening = document.getElementById('rekening');
const copyBtn2 = document.getElementById('copyBtn2');
const rekening2 = document.getElementById('rekening2');

openInvitation.addEventListener('click', () => {
  cover.classList.add('hidden');
  invitation.classList.remove('hidden');
  setTimeout(() => {
    invitation.classList.add('show');
  }, 50);
  weddingMusic.play();
  musicIcon.src = "img/music-icon.png";
  musicIcon.alt = "Musik Menyala";
});

toggleMusic.addEventListener('click', () => {
  if (weddingMusic.paused) {
    weddingMusic.play();
    musicIcon.src = "img/music-icon.png";
    musicIcon.alt = "Musik Menyala";
  } else {
    weddingMusic.pause();
    musicIcon.src = "img/music-stop-icon.png";
    musicIcon.alt = "Musik Mati";
  }
});

// Countdown Timer
function updateCountdown() {
  const weddingDate = new Date('June 07, 2026 09:00:00').getTime();
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


toggleBtn.addEventListener('click', () => {
  if (giftCard.style.display === "none" || giftCard.style.display === "") { giftCard.style.display = "block"; }
  else { giftCard.style.display = "none"; }
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(rekening.textContent).then(() => { alert("Nomor rekening berhasil disalin"); });
});

copyBtn2.addEventListener('click', () => {
  navigator.clipboard.writeText(rekening2.textContent).then(() => { alert("Nomor rekening berhasil disalin"); });
});

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('to') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
const namaContainer = document.querySelector('.cover p span');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');


nameInput.value = nama;
nameInput.value = pronoun;

