// Array of Ghana carrier prefixes
const glo = ['0023'];
const mtn = ['0024', '0025', '0054', '0054', '0059'];
const airteltigo = ['0026', '0027', '0056', '0057'];
const expresso = ['0028'];
const vodafone = ['0020', '0050'];

// Getting elements from html doc.
const userInput = document.querySelector("input");
const btnClick = document.querySelector("button");

// Button click event
btnClick.addEventListener('click', valMobileNum);


//  Function to Validate Mobile Number
function valMobileNum() {
  for (g of glo) {
    if (userInput.value.slice(0, 4) === g) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const mtn_logo = document.getElementById("mtn");
      mtn_logo.style.display = "none";
      const airteltigo_logo = document.getElementById("airtel");
      airteltigo_logo.style.display = "none";
      const expresso_logo = document.getElementById("expresso");
      expresso_logo.style.display = "none";
      const vodafone_logo = document.getElementById("vodafone");
      vodafone_logo.style.display = "none";
      //  done
      const glo_logo = document.getElementById("glo");
      glo_logo.style.display = "flex";
      glo_logo.style.width = "55px";
      glo_logo.style.height = "55px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };

  for (m of mtn) {
    if (userInput.value.slice(0, 4) === m) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const glo_logo = document.getElementById("glo");
      glo_logo.style.display = "none";
      const airteltigo_logo = document.getElementById("airtel");
      airteltigo_logo.style.display = "none";
      const expresso_logo = document.getElementById("expresso");
      expresso_logo.style.display = "none";
      const vodafone_logo = document.getElementById("vodafone");
      vodafone_logo.style.display = "none";
      //  done
      const mtn_logo = document.getElementById("mtn");
      mtn_logo.style.display = "flex";
      mtn_logo.style.width = "50px";
      mtn_logo.style.height = "50px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };

  for (a of airteltigo) {
    if (userInput.value.slice(0, 4) === a) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const glo_logo = document.getElementById("glo");
      glo_logo.style.display = "none";
      const mtn_logo = document.getElementById("mtn");
      mtn_logo.style.display = "none";
      const expresso_logo = document.getElementById("expresso");
      expresso_logo.style.display = "none";
      const vodafone_logo = document.getElementById("vodafone");
      vodafone_logo.style.display = "none";
      //  done
      const airteltigo_logo = document.getElementById("airtel");
      airteltigo_logo.style.display = "flex";
      airteltigo_logo.style.width = "50px";
      airteltigo_logo.style.height = "50px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };

  for (v of vodafone) {
    if (userInput.value.slice(0, 4) === v) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const glo_logo = document.getElementById("glo");
      glo_logo.style.display = "none";
      const airteltigo_logo = document.getElementById("airtel");
      airteltigo_logo.style.display = "none";
      const expresso_logo = document.getElementById("expresso");
      expresso_logo.style.display = "none";
      const mtn_logo = document.getElementById("mtn");
      mtn_logo.style.display = "none";
      //  done
      const vodafone_logo = document.getElementById("vodafone");
      vodafone_logo.style.display = "flex";
      vodafone_logo.style.width = "70px";
      vodafone_logo.style.height = "50px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };

  for (e of expresso) {
    if (userInput.value.slice(0, 4) === e) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const glo_logo = document.getElementById("glo");
      glo_logo.style.display = "none";
      const airteltigo_logo = document.getElementById("airtel");
      airteltigo_logo.style.display = "none";
      const vodafone_logo = document.getElementById("vodafone");
      vodafone_logo.style.display = "none";
      const mtn_logo = document.getElementById("mtn");
      mtn_logo.style.display = "none";
      //  done
      const telkom_logo = document.getElementById("expresso");
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
}