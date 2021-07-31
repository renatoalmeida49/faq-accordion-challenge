questions = document.querySelectorAll('.question')

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active')
        question.nextElementSibling.classList.toggle('active')
        question.children[0].classList.toggle('active')
    })
})