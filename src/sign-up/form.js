export class Form {
    onInputFocus(input) {
        input.classList.add("float-form-input-color");
        const label = input.nextElementSibling;
        label.classList.add("float-label");
    }

    onInputBlur(input) {
        input.value = input.value.trim();
        if(input.value.trim() !== "") return;
        input.classList.remove("float-form-input-color");
        const label = input.nextElementSibling;
        label.classList.remove("float-label");
    }
}