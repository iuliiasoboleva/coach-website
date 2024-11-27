const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const numberItems = document.querySelectorAll('.number-item');
const selectedNumberInput = document.getElementById('selected-number');

let currentIndex = 0;

function updateSliderVisibility() {
    // Обновляем видимость чисел
    numberItems.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + 7) {
            item.classList.remove('hidden');
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
            item.classList.add('hidden');
        }
    });

    // Скрываем кнопки, если достигли границ
    prevButton.style.display = currentIndex === 0 ? 'none' : 'inline-block';
    nextButton.style.display = currentIndex === numberItems.length - 7 ? 'none' : 'inline-block';
}

function selectNumber(index) {
    selectedNumberInput.value = index + 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderVisibility();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < numberItems.length - 7) {
        currentIndex++;
        updateSliderVisibility();
    }
});

numberItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        selectNumber(index);
    });
});

updateSliderVisibility();
