const canvas = document.getElementById("cookie-particles");
const ctx = canvas.getContext("2d");
let particles = [];

//insane borrowed code from stackoverflow
function audioTimerLoop(callback, frequency) {
  var freq = frequency / 1000;
  var aCtx = new AudioContext();

  var silence = aCtx.createGain();
  silence.gain.value = 0;
  silence.connect(aCtx.destination);

  onOSCend();

  var stopped = false;
  function onOSCend() {
    var osc = aCtx.createOscillator();
    osc.onended = onOSCend;
    osc.connect(silence);
    osc.start(0);
    osc.stop(aCtx.currentTime + freq);
    callback(aCtx.currentTime);
    if (stopped) {
      osc.onended = function() {
        aCtx.close();
        return;
      };
    }
  };

  return function() {
    stopped = true;
  };
}

// Set canvas dimensions to window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Redraw canvas on window resize
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function drawParticles() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw particles
  for (let i = 0; i < particles.length; i++) {
    ctx.beginPath();
    ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
    ctx.fillStyle = particles[i].color;
    ctx.fill();
    particles[i].y += particles[i].speed;
    if (particles[i].y > canvas.height) {
      particles.splice(i, 1);
      i--;
    }
  }
}

setInterval(drawParticles, 1)

function moneyOrCoin() {
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  if (randomNumber >= 3) {
    return "#008000"
  } else {
    return "#d4af37"
  }
}

function drawNewParticles(amount) {
  // Create new particles
  for (let i = 0; i < amount; i++) {
    if (Math.random() < 0.01) {
      if (particles.length > document.getElementById('particleMeter').value) return;
      particles.push({
        x: Math.random() * canvas.width,
        y: -100,
        size: Math.random() * 5 + 5,
        speed: Math.random() * 5 + 1,
        color: moneyOrCoin()
      });
    }
  }
}