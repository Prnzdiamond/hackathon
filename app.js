let mainContent = document.getElementById("main-content");
let checklistDiv = document.getElementById("checklist-div");
let listClick = document.querySelectorAll(".list-check");
let buttonList = document.querySelectorAll(".button-container");
let imageDiv = document.querySelectorAll(".img-div");
let pDiv = document.querySelectorAll(".list-check-div");
let cDiv = document.querySelectorAll(".list-check-div2 p");
let svgCon = document.querySelectorAll(".svg-container");
let progressBar = document.getElementById("progress-bar");
let counter = document.getElementById("nm-chg");

console.log(typeof counter);

let clickable = true;

function mainConDrop(x, span) {
  if (clickable) {
    clickable = false;

    // Perform your desired action here
    if (span.querySelector("svg").getAttribute("viewBox") == "0 0 21 20") {
      console.log("true");
      animationF(
        span,
        `<svg width="30" height="30" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z"
                              fill="#1c181d" />
                          </svg>`,
        `<svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#1c181d"/>
            </svg>`,
        "roll-animation2"
      );
    } else if (
      span.querySelector("svg").getAttribute("viewBox") == "0 0 21 21"
    ) {
      animationB(
        span,
        `<svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#1c181d"/>
            </svg>`,
        `<svg width="30" height="30" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z"
                              fill="#1c181d" />
                          </svg>`,
        "roll-animation2"
      );
    }

    let check = setInterval(() => {
      let element = document.getElementById(x);
      element.classList.toggle("view-flex");
      mainContent.classList.toggle("change-height");

      clearInterval(check);
    }, 500);

    // Enable clicking after 2 seconds
    setTimeout(() => {
      clickable = true;
    }, 1600);
  }
}

function dropDownContent(span, x, y) {
  let element = document.getElementById(x);
  let element2 = document.getElementById(y);
  element.classList.toggle("view-block");
  element.focus();
  if (element2.classList.contains("view-block")) {
    element2.classList.remove("view-block");
  }

  makeFocused(span, x);
}

function removeParent(x) {
  let element = document.getElementById(x);
  element.parentNode.removeChild(element);
}

function toggleElement(i) {
  for (let j = 0; j < listClick.length; j++) {
    let crossChecker = listClick[j];

    if (
      crossChecker.classList.contains("list-check2") &&
      crossChecker != listClick[i]
    ) {
      crossChecker.classList.remove("list-check2");
      cDiv[j].classList.remove("view-block");
      buttonList[j].classList.remove("view-flex");
      imageDiv[j].classList.remove("view-flex");
      pDiv[j].classList.remove("list-check-div-tog");
    }
  }

  listClick[i].classList.add("list-check2");
  cDiv[i].classList.add("view-block");
  buttonList[i].classList.add("view-flex");
  imageDiv[i].classList.add("view-flex");
  pDiv[i].classList.add("list-check-div-tog");
  console.log("goat");
}

function removeClass(span, x) {
  let element = document.getElementById("profile-sett");
  let element2 = document.getElementById("alert-bx");
  if (
    element.classList.contains("view-block") ||
    element2.classList.contains("view-block")
  ) {
    element.classList.remove("view-block");
    element2.classList.remove("view-block");
  } else {
    console.log("safe");
  }
  removeAllClas();
}

function removeAllClas() {
  let element = document.querySelectorAll(".focus");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove("focus");
  }
}

let count;

function increaseProgres() {
  count = parseInt(counter.innerText);
  count++;
  progressBar.value = (count / listClick.length) * 100;
  counter.innerText = `${count}`;
}

function decreaseProgress() {
  count = parseInt(counter.innerText);
  count--;
  progressBar.value = (count / listClick.length) * 100;
  counter.innerText = count;
}

function animationF(span, x, y, z) {
  span.querySelector("svg").outerHTML = x;
  span.classList.add(z);
  let checker = setInterval(() => {
    console.log(span.querySelector("svg"));
    span.querySelector("svg").outerHTML = y;
    span.classList.remove(z);
    clearInterval(checker);
  }, 500);
}

function animationB(span, x, y, z) {
  span.querySelector("svg").outerHTML = x;
  span.classList.add(z);
  let checker = setInterval(() => {
    span.querySelector("svg").outerHTML = y;
    span.classList.remove(z);
    clearInterval(checker);
  }, 500);
}
function toggleSVG(span,i) {
  if (span.querySelector("svg").getAttribute("viewBox") == "0 0 32 32") {
    let check = setInterval(() => {
      increaseProgres();
      clearInterval(check);
    }, 1000);
    animationF(
      span,
      `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28" fill="none"><path
      d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
      stroke="#616161"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round" /> </svg>`,
      `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#616161"></circle><path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"></path></svg>`,
      "roll-animation"
    );
        for (let q = 0; q < listClick.length; q++) {
                let crossChecker =listClick[q]
                 if (
                   crossChecker.classList.contains("list-check2") && i !== listClick.length-1 ) {
                   crossChecker.classList.remove("list-check2");
                   cDiv[q].classList.remove("view-block");
                   buttonList[q].classList.remove("view-flex");
                   imageDiv[q].classList.remove("view-flex");
                   pDiv[q].classList.remove("list-check-div-tog");
                 }
                
        }
        for (let j = 1; j < listClick.length; j++) {
                        let svgSibling;
                        console.log(svgSibling)
                       let crossChecker = listClick[i + j];
                       console.log(crossChecker, "checker");
                    if(i !== listClick.length-1){
                      console.log(true);
                         svgSibling =
                             listClick[i + j].previousElementSibling
                               .firstElementChild;
                    };
                       console.log(svgSibling, " sibling");
                       if (svgSibling && svgSibling.getAttribute("viewBox") == "0 0 32 32") {
                         crossChecker.classList.add("list-check2");
                         cDiv[i + j].classList.add("view-block");
                         buttonList[i + j].classList.add("view-flex");
                         imageDiv[i + j].classList.add("view-flex");
                         pDiv[i + j].classList.add("list-check-div-tog");

                         listClick[i].classList.remove("list-check2");
                         cDiv[i].classList.remove("view-block");
                         buttonList[i].classList.remove("view-flex");
                         imageDiv[i].classList.remove("view-flex");
                         pDiv[i].classList.remove("list-check-div-tog");

                         break;
                        
                       }
                       
                
        }
        

    

  } else if (span.querySelector("svg").getAttribute("viewBox") == "0 0 24 24") {
    console.log(span.querySelector("svg"));
    let check = setInterval(() => {
      decreaseProgress();
      clearInterval(check);
    }, 1000);
    animationB(
      span,
      `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28" fill="none"><path
      d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
      stroke="#616161"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round" /> </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke="#616161" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
  </svg>`,
      "roll-animation"
    );
  }

  if (span.querySelector("svg").getAttribute("viewBox") == "0 0 32 32") {
  }
}

function makeFocused(span, x) {
  let element = document.getElementById(x);
  let elementValue = window
    .getComputedStyle(element)
    .getPropertyValue("display");
  console.log(element, elementValue);
  if (elementValue == "block" || elementValue == "flex") {
    span.classList.add("focus");
  } else {
    span.classList.remove("focus");
  }
}

// key board users
  function handleKeyPress(event, callback) {
    if (event.key === "Enter") {
      callback();
    }
  }

