function updateClock() {
    const clock = document.getElementById('clock');
    if (!clock) return;
    const now = new Date();
    clock.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

const startBtn = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');

if (startBtn && startMenu) {
    startBtn.onclick = (e) => {
        e.stopPropagation();
        const isHidden = startMenu.classList.toggle('hidden');
        startBtn.classList.toggle('active');
        startBtn.setAttribute('aria-expanded', !isHidden);
    };

    document.addEventListener('click', () => {
        startMenu.classList.add('hidden');
        startBtn.classList.remove('active');
        startBtn.setAttribute('aria-expanded', 'false');
    });
}

let topZ = 100;

function openApp(title, content, isChaos = false) {
    const win = document.createElement('section');
    win.className = 'app-window';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-modal', isChaos ? 'true' : 'false');
    const winId = 'title-' + Math.floor(Math.random() * 1000);
    win.setAttribute('aria-labelledby', winId);
    const winWidth = window.innerWidth < 600 ? window.innerWidth * 0.85 : 300;
    const maxX = window.innerWidth - winWidth - 20;
    const maxY = window.innerHeight - 200;
    win.style.left = Math.max(10, Math.random() * maxX) + 'px';
    win.style.top = Math.max(10, Math.random() * maxY) + 'px';
    win.style.zIndex = ++topZ;
    win.innerHTML = `
        <div class="win-header ${isChaos ? 'chaos' : ''}">
            <span id="${winId}">${title}</span>
            <button class="close-x" aria-label="Close Window">X</button>
        </div>
        <div class="win-body">
            <p>${content}</p>
            ${isChaos ? '<button class="chaos-ok">OK</button>' : ''}
        </div>
    `;
    document.body.appendChild(win);
    makeDraggable(win);
    const closeBtn = win.querySelector('.close-x');
    const okBtn = win.querySelector('.chaos-ok');
    const handleClose = (e) => {
        if (e) e.stopPropagation();
        win.remove();
        if (isChaos) {
            setTimeout(() => {
                triggerChaos();
                triggerChaos();
            }, 200);
        }
    };
    closeBtn.onclick = handleClose;
    if (okBtn) {
        okBtn.onclick = handleClose;
        okBtn.focus();
    }
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            handleClose();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
    const bringToFront = () => { win.style.zIndex = ++topZ; };
    win.onmousedown = bringToFront;
    win.ontouchstart = bringToFront;
}

const mainActionBtn = document.getElementById('main-action-btn');
const Messages = ["Error 0x00001","PC on fire?","Stop clicking!","I am a virus.","Format C:?","Your PC is currently haunted.","Click OK to accept your fate.","System error: Too many pixels.","Delete System32 to increase speed?","Download more RAM for only $9.99?"];

function triggerChaos() {
    const msg = Messages[Math.floor(Math.random() * Messages.length)];
    openApp('CRITICAL ERROR', msg, true);
}

if (mainActionBtn) {
    mainActionBtn.addEventListener('click', (e) => {
        e.preventDefault();
        for(let i=0; i<3; i++) { triggerChaos(); }
    });
}

function makeDraggable(el) {
    const header = el.querySelector('.win-header');
    let mouseX = 0, mouseY = 0;
    const onMove = (e) => {
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        const dx = mouseX - clientX;
        const dy = mouseY - clientY;
        mouseX = clientX;
        mouseY = clientY;
        el.style.top = (el.offsetTop - dy) + "px";
        el.style.left = (el.offsetLeft - dx) + "px";
    };
    const onEnd = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('touchmove', onMove);
    };
    const onStart = (e) => {
        if (e.target.classList.contains('close-x')) return;
        mouseX = e.clientX || (e.touches && e.touches[0].clientX);
        mouseY = e.clientY || (e.touches && e.touches[0].clientY);
        document.addEventListener('mousemove', onMove);
        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('mouseup', onEnd);
        document.addEventListener('touchend', onEnd);
    };
    header.addEventListener('mousedown', onStart);
    header.addEventListener('touchstart', onStart, { passive: false });
}