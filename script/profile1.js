document.addEventListener("DOMContentLoaded", () => {
    // Получаем ссылки на элементы
    const userNameSpan = document.getElementById("user-name");
    const userBirthdaySpan = document.getElementById("user-birthday");
    const userGenderSpan = document.getElementById("user-gender");
    const logoutButton = document.getElementById("logout");
    const testScoreSpan = document.getElementById("test-score");

    // Получаем данные из localStorage
    const userName = localStorage.getItem("userName") || "Неизвестный пользователь";
    const userBirthday = localStorage.getItem("userBirthday") || "—";
    const userGender = localStorage.getItem("userGender") || "—";
    const testScore = localStorage.getItem("lastTestScore") || "—"; // Если есть тест, его результат тоже может быть в localStorage

    // Устанавливаем данные в элементы
    userNameSpan.textContent = userName;
    userBirthdaySpan.textContent = userBirthday;
    userGenderSpan.textContent = userGender;
    testScoreSpan.textContent = testScore;

    // Обработчик кнопки "Выйти"
    logoutButton.addEventListener("click", () => {
        // Удаляем все данные из localStorage
        localStorage.removeItem("userName");
        localStorage.removeItem("userBirthday");
        localStorage.removeItem("userGender");
        localStorage.removeItem("lastTestScore");

        // Показать уведомление и перенаправить на главную
        alert("Вы вышли из системы!");
        window.location.href = "index.html"; // Перенаправляем на главную страницу
    });
});
