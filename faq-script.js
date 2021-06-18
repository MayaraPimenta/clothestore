const btns = document.querySelectorAll(".question-btn")
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const close = Array.from(document.getElementsByClassName("show-text"))
        
        const questionText = e.currentTarget.parentElement.parentElement
        questionText.classList.toggle("show-text")

        if (close.length > 0) {
            close.forEach(function (x) {
                x.classList.remove("show-text")
            })
        }     
})
})