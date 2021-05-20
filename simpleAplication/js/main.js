const input = document.getElementById("myInput")
const myButton = document.getElementById("myButton")
const select = document.getElementById("mySelect")
const text = document.getElementById("1")
input.value = text.text


function rewriteOption() {
    const textValue = input.value

    if (textValue.trim().length == 0) {
        input.classList.add("trigered_input")
        myButton.classList.add("trigered_button")
        
        return
    }
    select.options[select.selectedIndex].innerHTML = textValue
}
function mySelect() {
    let temp = select.options[select.selectedIndex].text;
    input.value = temp
}
function enterPress(event) {
    if (event.keyCode === 13) {
        rewriteOption()
    } else inputFocus()
}

function inputFocus() {
    if (!input.classList.contains("inputFocus")) {
        input.classList.toggle("inputFocus")
    }
    if (input.classList.contains("trigered_input")) {
        input.classList.remove("trigered_input")
    }
    if (myButton.classList.contains("trigered_button")) {
        myButton.classList.remove("trigered_button")
    }
}
function inputBlur() {
    input.classList.remove("inputFocus")
}