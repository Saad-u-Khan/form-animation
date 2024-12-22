const labels = document.querySelectorAll(".form-control label");

//adding span tag to each letter
labels.forEach(label => {
    label.innerHTML = label.innerText.split('')
        .map((letter) => `<span>${letter}</span>`)
        .join('')
})