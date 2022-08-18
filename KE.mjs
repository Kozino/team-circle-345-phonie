// Array of Kenya carrier prefixes
const airtel = ['0730', '0731', '0732', '0733', '0734', '0735', '0736', '0737', '0738', '0739', '0750', '0751', '0752', '0753', '0754', '0755', '0756', '0762', '0780', '0781', '0782', '0783', '0784', '0785', '0786', '0787', '0788', '0789'];
const safari = ['0701', '0702', '0703', '0704', '0705', '0706', '0707', '0708', '0710', '0711', '0712', '0713', '0714', '0715', '0716', '0717', '0718', '0719', '0720', '0721', '0722', '0723', '0724', '0725', '0726', '0728', '0729', '0740', '0741', '0742', '0743', '0746', '0748', '0757', '0758', '0759', '0790', '0791', '0792', '0793', '0794', '0795', '0796', '0797', '0798', '0799', '0110', '0111'];
const telkom = ['0770', '0771', '0772', '0773', '0774', '0775', '0776', '0777', '0778', '0779']

// Getting elements from html doc.
const userInput = document.querySelector("input");
const btnClick = document.querySelector("button");

// Button click event
btnClick.addEventListener('click', valMobileNum);


//  Function to Validate Mobile Number
function valMobileNum() {
  for (a of airtel) {
    if (userInput.value.slice(0, 4) === a) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const telkom_logo = document.getElementById("telkom");
      telkom_logo.style.display = "none";
      const safari_logo = document.getElementById("safari");
      safari_logo.style.display = "none";
      //  done
      const airtel_logo = document.getElementById("airtel");
      airtel_logo.style.display = "flex";
      airtel_logo.style.width = "110px";
      airtel_logo.style.height = "30px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };
  for (s of safari) {
    if (userInput.value.slice(0, 4) === s) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const airtel_logo = document.getElementById("airtel");
      airtel_logo.style.display = "none";
      const telkom_logo = document.getElementById("telkom");
      telkom_logo.style.display = "none";
      //  done
      const safari_logo = document.getElementById("safari");
      safari_logo.style.display = "flex";
      safari_logo.style.width = "50px";
      safari_logo.style.height = "50px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };
  for (t of telkom) {
    if (userInput.value.slice(0, 4) === t) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const airtel_logo = document.getElementById("airtel");
      airtel_logo.style.display = "none";
      const safari_logo = document.getElementById("safari");
      safari_logo.style.display = "none";
      //  done
      const telkom_logo = document.getElementById("telkom");
      telkom_logo.style.display = "flex";
      telkom_logo.style.width = "50px";
      telkom_logo.style.height = "50px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };
  if (userInput.value === '') {
    const carrierIndicator = document.getElementById("messageBox");
    carrierIndicator.style.display = "none";
    const warningText = document.getElementById("text");
    warningText.style.display = "none";
    const warningText2 = document.getElementById("text2");
    warningText2.style.display = "flex";
    warningText2.style.fontSize = "18px";
    warningText2.innerText = "Input Field Cannot be Empty!";

    console.log("Input Field Cannot be Empty!");
  } else if (userInput.value.length === 10) {
    console.log("Valid Phone Number!")
  } else if (userInput.value.length > 0 || userInput.value.length < 10 && userInput.value.length > 10) {
    const carrierIndicator = document.getElementById("messageBox");
    carrierIndicator.style.display = "none";
    const warningText2 = document.getElementById("text2");
    warningText2.style.display = "none";
    const warningText = document.getElementById("text");
    warningText.style.display = "flex";
    warningText.style.fontSize = "15px";
    warningText.innerText = "Invalid! Confirm phone number length!";
    console.log("Invalid! Confirm phone number length!");
  };

};
