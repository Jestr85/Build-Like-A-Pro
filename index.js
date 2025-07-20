// template_y1l7be4
// service_5y6x30m
// UDZbpREMwO5XtJtWR

async function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_5y6x30m',
            'template_y1l7be4',
            event.target,
            'UDZbpREMwO5XtJtWR'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert("The email service is temporarily unavailable. Please contact me directly - jestr85x@gmail.com")
        })
}

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen
    document.body.classList += " modal--open"
}