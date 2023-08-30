let elem = document.getElementById('element')
let code = document.getElementById('code')
let inputs = document.querySelectorAll(".sliders input")
let btn = document.querySelector('button');

inputs.forEach(inp => inp.addEventListener("input", generateShadow));

function generateShadow() {
    let hShadow = document.getElementById("h-shadow").value;
    let vShadow = document.getElementById("v-shadow").value;
    let blurRadius = document.getElementById("blur-radius").value;
    let spreadRadius = document.getElementById("spread-radius").value;
    let shadowColor = document.getElementById("shadow-color").value;
    let shadowColorOpacity = document.getElementById("shadow-color-opacity").value;
    let shadowInset = document.getElementById("shadow-inset").checked;
    console.log()

    // Using ternary operator to check if inset checkbox is checked or not.
    // If - check we add the inset prefix.
    // Else - no inset prefix is added
    let boxShadow = shadowInset ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowColorOpacity)}` : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowColorOpacity)}`

    elem.style.boxShadow = boxShadow;
    code.innerText = `box-shadow: ${boxShadow}; `;


}

// Converting Hex value to rgba
function hexToRgba(shadowColor, shadowColorOpacity) {
    let r = parseInt(shadowColor.substr(1, 2), 16)
    let g = parseInt(shadowColor.substr(3, 2), 16)
    let b = parseInt(shadowColor.substr(5, 2), 16)
    return `rgba(${r}, ${g}, ${b}, ${shadowColorOpacity})`
}

function copyCode() {
    navigator.clipboard.writeText(code.value);
    btn.innerText = "Code Copied"
    setTimeout(() => btn.innerText = "Copy", 1300);
}

btn.addEventListener("click", copyCode);


// Call the generateShadow function on every page load
window.onload = generateShadow();