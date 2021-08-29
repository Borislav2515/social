import {Question} from "./questions";
import {isValid} from "./utils";
import './style.css'


const form = document.getElementById('form');
const name = form.querySelector('#form-input__name');
const submitBtn = form.querySelector('#submit');


form.addEventListener('submit', submitFormHandler);
name.addEventListener('input', () => {
    submitBtn.disabled = !isValid(name.value)
});

function submitFormHandler(event) {
    event.preventDefault();

    if (isValid(name.value)) {
        const question = {
            name: name.value.trim(),
            date: new Date().toJSON()
        };
        // Отправить асинхронный вопрос на сервер
        Question.create(question).then(() => {
            submitBtn.disabled = true;
            console.log('Question', question);
            name.value = '';
            submitBtn.disabled = false;
        });
    }
}
