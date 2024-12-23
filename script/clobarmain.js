//словарь
// Данные для описания машин
const items = ["Audi", "Quattro", "Купе", "A8", "E-Tron", "Sport", "Vorsprung durch Technik", "A6", "Q-серия", "TT"];

const descriptions = {
    "Audi": "Немецкий автомобильный бренд, основанный в 1909 году.",
    "Quattro": "Технология полного привода, разработанная Audi.",
    "Купе": "Тип кузова автомобиля, популярный среди спортивных моделей.",
    "A8": "Серия автомобилей премиум-класса от Audi.",
    "E-Tron": "Электромобили марки Audi.",
    "Sport": "Спортивное подразделение Audi.",
    "Vorsprung durch Technik":"Известный слоган марки Audi.",
    "A6": "Седаны премиум-класса Audi.",
    "Q-серия": "Кроссоверы марки Audi.",
    "TT": "Родстер от Audi."
};

// Функция для отображения описания
function showDescription(car) {
    const descriptionDiv = document.getElementById('description');
    if (descriptions[car]) {
        descriptionDiv.innerText = descriptions[car];
    } else {
        descriptionDiv.innerText = "Описание отсутствует.";
    }
}

// Функция для добавления обработчика клика на элемент списка
function addListItemClickHandler(li, item) {
    li.addEventListener('click', () => {
        showDescription(item); // Отображаем описание выбраннй машины
    });
}

// Обновляем функцию начального отображения списка
items.forEach(item => {
    const li = document.createElement('li'); 
    li.innerText = item;
    addListItemClickHandler(li, item); // Добавляем обработчик клика
    vyvvod.appendChild(li);
});

// Обновляем функцию обработки поиска
vvod2.addEventListener('input', () => {
    vyvvod.innerHTML = "";
    let check = true;
    items.forEach(item => {
        if (item.toLowerCase().includes(vvod2.value.toLowerCase())) {
            const li = document.createElement('li');
            li.innerText = item;
            addListItemClickHandler(li, item); // Добавляем обработчик клика
            vyvvod.appendChild(li);
            check = false;
        }
    });

    if (check) {
        vyvvod.innerHTML = "Нет совпадений";
    }
});