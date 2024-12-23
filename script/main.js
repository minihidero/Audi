document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById('auth-form');
    const nameInput = document.getElementById('name');
    const birthdateInput = document.getElementById('birthdate');
    const genderInputs = document.querySelectorAll('input[name="gender"]');

    // Обработчик отправки формы
    authForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Отменить стандартную отправку формы

        let isValid = true;

        // Проверка обязательных полей
        const name = nameInput.value;
        const date = birthdateInput.value;
        const gen = document.querySelector('input[name="gender"]:checked')?.value;

        if (!name || !date || !gen) {
            alert("Пожалуйста, заполните все обязательные поля.");
            isValid = false;
        }

        // Проверка имени
        const nameError = document.getElementById('name-error');
        if (!/^[А-Я][а-я]+$/.test(name)) {
            nameError.textContent = 'Имя должно быть на русском языке с заглавной первой буквой.';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Проверка даты рождения
        const today = new Date();
        const birthDate = new Date(date);
        const birthdateError = document.getElementById('birthdate-error');

        if (birthDate > today || birthDate < new Date(today.getFullYear() - 120, today.getMonth(), today.getDate())) {
            birthdateError.textContent = 'Дата рождения не корректна.';
            birthdateError.style.display = 'block';
            isValid = false;
        } else {
            birthdateError.style.display = 'none';
        }

        // Проверка пола
        const genderError = document.getElementById('gender-error');
        if (!gen) {
            genderError.textContent = 'Пожалуйста, выберите пол.';
            genderError.style.display = 'block';
            isValid = false;
        } else {
            genderError.style.display = 'none';
        }

        // Если все проверки прошли успешно, сохраняем данные в localStorage и переходим на страницу профиля
        if (isValid) {
            localStorage.setItem("userName", name);
            localStorage.setItem("userBirthday", date);
            localStorage.setItem("userGender", gen);
            window.location.href = "opicanue.html"; // Перенаправляем на страницу личного кабинета
        }
    });
});
