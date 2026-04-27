const display = document.getElementById('display');

// डिस्प्ले में नंबर या ऑपरेटर जोड़ने के लिए
function appendToDisplay(input) {
    display.value += input;
}

// गणना करने के लिए
function calculate() {
    try {
        // eval() फंक्शन स्ट्रिंग को मैथ की तरह हल करता है
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// डिस्प्ले साफ़ करने के लिए (अगर आप 'C' बटन जोड़ें)
function clearDisplay() {
    display.value = "";
}