function onFormNext(next) {
    let form = next.parentElement;
    let text = next.previousElementSibling;
    let email = text.previousElementSibling;
    let submit = next.nextElementSibling;

    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }

    email.style.display = "none";
    next.style.display = "none";
    text.style.display = "inline";
    text.value = "";
    submit.style.display = "inline";
}