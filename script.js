let selectedPet = null;


function goBack() {
  // Goes to previous page in browser history
  window.history.back();

  // OR, if you want to send user to a specific page:
  // window.location.href = "index.html"; 
}


function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  // update background per screen
  const backgrounds = {
    landing: 'assets/backgrounds/landing-bg.png',
    adopt: 'assets/backgrounds/adopt-bg.png',
    topics: 'assets/backgrounds/topics-bg.png',
    manure: 'assets/backgrounds/manure-bg.png'
  };
  document.body.style.backgroundImage = `url('${backgrounds[id]}')`;
}

function selectPet(el, pet) {
  document.querySelectorAll('.pet').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  selectedPet = pet;
  document.getElementById('stepBtn').disabled = false;
}

// Drag & Drop logic
const draggables = document.querySelectorAll('.draggable');
const bin = document.getElementById('bin');

draggables.forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.textContent);
  });
});

bin.addEventListener('dragover', e => e.preventDefault());

bin.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const goodItems = ['🍎 Fruit Peel', '🍂 Dry Leaves'];
  const p = document.createElement('p');
  p.textContent = data + (goodItems.includes(data) ? " ✅ Compostable" : " ❌ Not compostable");
  bin.appendChild(p);
});

function finishManure() {
  alert("🎉 You’ve crafted compost that helps your pet thrive!");
}
