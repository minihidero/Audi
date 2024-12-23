document.addEventListener("DOMContentLoaded", () => {
    // Получаем ссылки на элементы формы, результатов и кнопки сброса
    const form = document.getElementById("test-form");
    const resultSection = document.getElementById("test-result");
    const scoreElement = document.getElementById("score");
    const answersContainer = document.getElementById("answers");
    const retryButton = document.getElementById("retry");

    // Обработчик отправки формы
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        checkAnswers(); // Проверяем ответы
    });

    // Обработчик кнопки "Пройти тест заново"
    retryButton.addEventListener("click", () => {
        form.reset(); // Сбрасываем все поля формы
        answersContainer.innerHTML = ""; // Очищаем результаты
        resultSection.classList.add("hidden"); // Прячем секцию результатов
        form.classList.remove("hidden"); // Показываем форму
    });

    // Функция проверки ответов
    function checkAnswers() {
        let score = 0; // Переменная для подсчёта баллов
        answersContainer.innerHTML = ""; // Очищаем предыдущие результаты

        // Правильные ответы для всех вопросов
        const answers = {
            answer1: "4 кольца", // Текстовый ответ
            answer2: "1909", // Числовой ответ
            question3: "4", // Радио-кнопка
            question4: "Quattro", // Радио-кнопка
            question5: "RS", // Текстовый ответ
            question6: "Седан", // Радио-кнопка
        };
        

        // Проверяем ответы по каждому вопросу
        Object.keys(answers).forEach((key, index) => {
            const userAnswer = getAnswer(key); // Получаем ответ пользователя
            const correctAnswer = answers[key]; // Правильный ответ
            const isCorrect = userAnswer === correctAnswer; // Сравниваем ответы
            score += isCorrect ? 1 : 0; // Если правильно, увеличиваем балл
            showResult(index + 1, isCorrect, correctAnswer); // Показываем результат
        });

        // Сохраняем результат в localStorage
        localStorage.setItem("lastTestScore", score);

        // Показываем общий результат
        scoreElement.textContent = `Вы набрали ${score} из ${Object.keys(answers).length} баллов.`;
        resultSection.classList.remove("hidden"); // Показываем секцию с результатами
        form.classList.add("hidden"); // Скрываем форму
    }

    // Функция получения ответа пользователя
    function getAnswer(key) {
        if (key.startsWith("question")) {
            //радио-кнопками
            const selected = document.querySelector(`[name='${key}']:checked`);
            return selected ? selected.value : null; // Возвращаем значение, если выбрано
        }
        //текстовым полем
        const input = document.querySelector(`[name='${key}']`);
        return input ? input.value.trim().toLowerCase() : ""; // Возвращаем текст ответа
    }

    // Функция отображения результата для каждого вопроса
    function showResult(questionNumber, isCorrect, correctAnswer) {
        const resultDiv = document.createElement("div"); // Создаём новый элемент
        resultDiv.textContent = `Вопрос ${questionNumber}: ${isCorrect ? "Верно" : `Неверно. Правильный ответ: ${correctAnswer}`}`;
        resultDiv.style.color = isCorrect ? "green" : "red"; // Зелёный для верных, красный для неверных
        answersContainer.appendChild(resultDiv); // Добавляем результат на страницу
    }
});
logOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.replace('.index.html');
});

