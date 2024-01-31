const themes = ["styles/light.css", "styles/dark.css"];
const icons = ["assets/Sun.svg", "assets/Moon.svg"];
const [lightTheme, darkTheme] = themes;
const [sunIcon, moonIcon] = icons;
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");
const theme = document.getElementById("theme");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "MathError";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}


function changeTheme() {
  const isLightTheme = theme.getAttribute("href") === lightTheme;
  theme.setAttribute("href", isLightTheme ? darkTheme : lightTheme);
  themeIcon.setAttribute("src", isLightTheme ? sunIcon : moonIcon);
  toast.innerHTML = `Switched to ${isLightTheme ? "Dark" : "Light"} Mode Successfully ${isLightTheme ? '🌙' : '☀️'}`;
  setTimeout(() => toast.innerHTML = "Calculator", 1500);
}

function liveScreen(enteredValue) {
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  e.preventDefault();

  // numbers
  if (e.key >= "0" && e.key <= "9") {
    res.value += e.key;
  }

  // operators
  const operators = ["+", "-", "*", "/"];
  if (operators.includes(e.key)) {
    res.value += e.key;
  }

  // decimal key
  if (e.key === ".") {
    res.value += e.key;
  }

  // press enter to see result
  if (e.key === "Enter") {
    calculate(res.value);
  }

  // backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    // remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}