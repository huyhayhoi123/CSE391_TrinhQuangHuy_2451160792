const images = Array.from({ length: 9 }, (_, index) => ({
    src: `https://placehold.co/640x360?text=Image+${index + 1}`,
    caption: `Ảnh số ${index + 1}`
}));

let currentIndex = 0;
let playing = false;
let intervalId = null;

const image = document.querySelector('#galleryImage');
const caption = document.querySelector('#caption');
const modal = document.querySelector('#imageModal');
const modalImage = document.querySelector('#modalImage');
const palette = document.querySelector('#palette');
const commandInput = document.querySelector('#commandInput');
const commandList = document.querySelector('#commandList');
const playBtn = document.querySelector('#playBtn');

const commands = [
    { name: 'Next image', action: nextImage },
    { name: 'Previous image', action: prevImage },
    { name: 'Open image modal', action: openImageModal },
    { name: 'Play slideshow', action: playSlideshow },
    { name: 'Pause slideshow', action: pauseSlideshow }
];

function renderImage() {
    image.src = images[currentIndex].src;
    image.alt = images[currentIndex].caption;
    caption.textContent = images[currentIndex].caption;
    modalImage.src = images[currentIndex].src;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    renderImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderImage();
}

function jumpToImage(number) {
    if (number >= 1 && number <= images.length) {
        currentIndex = number - 1;
        renderImage();
    }
}

function playSlideshow() {
    if (playing) return;
    playing = true;
    playBtn.textContent = 'Pause';
    intervalId = setInterval(nextImage, 1200);
}

function pauseSlideshow() {
    playing = false;
    playBtn.textContent = 'Play';
    clearInterval(intervalId);
}

function toggleSlideshow() {
    playing ? pauseSlideshow() : playSlideshow();
}

function openImageModal() {
    modal.classList.add('open');
}

function closeAll() {
    modal.classList.remove('open');
    palette.classList.remove('open');
}

function openPalette() {
    palette.classList.add('open');
    commandInput.value = '';
    renderCommands(commands);
    commandInput.focus();
}

function renderCommands(list) {
    commandList.textContent = '';
    list.forEach((command, index) => {
        const li = document.createElement('li');
        li.textContent = command.name;
        li.dataset.index = index;
        if (index === 0) li.classList.add('active');
        commandList.appendChild(li);
    });
}

function getVisibleCommands() {
    const keyword = commandInput.value.toLowerCase();
    return commands.filter(command => command.name.toLowerCase().includes(keyword));
}

document.querySelector('#nextBtn').addEventListener('click', nextImage);
document.querySelector('#prevBtn').addEventListener('click', prevImage);
document.querySelector('#playBtn').addEventListener('click', toggleSlideshow);
document.querySelector('#openPalette').addEventListener('click', openPalette);
document.querySelector('#galleryImage').addEventListener('click', openImageModal);
document.querySelector('#closeImageModal').addEventListener('click', closeAll);

commandInput.addEventListener('input', () => renderCommands(getVisibleCommands()));

commandList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;
    const visible = getVisibleCommands();
    visible[Number(li.dataset.index)].action();
    closeAll();
});

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openPalette();
        return;
    }

    if (event.key === 'Escape') closeAll();
    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') prevImage();
    if (event.key === ' ' && !palette.classList.contains('open') && document.activeElement !== commandInput) {
        event.preventDefault();
        toggleSlideshow();
    }

    const number = Number(event.key);
    if (number >= 1 && number <= 9) jumpToImage(number);

    if (palette.classList.contains('open') && event.key === 'Enter') {
        const visible = getVisibleCommands();
        if (visible[0]) {
            visible[0].action();
            closeAll();
        }
    }
});

renderImage();
