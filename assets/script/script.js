questions = document.querySelectorAll('dt')

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active')
        question.nextElementSibling.classList.toggle('active')
    })
})