let currentState = choosingService;

let selectedService = "";
let addOn = "";

// ENTRY
export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = choosingService;
  selectedService = "";
  addOn = "";
}

// 1) SERVICE SELECTION (START HERE)
function choosingService(sInput) {
  let aReturn = [];

  if (!sInput) {
    aReturn.push("Select a service:");
    aReturn.push("• Manicure");
    aReturn.push("• Pedicure");
    return aReturn;
  }

  let input = sInput.toLowerCase().trim();

  if (input === "manicure") {
    selectedService = "Manicure";
  } 
  else if (input === "pedicure") {
    selectedService = "Pedicure";
  } 
  else {
    aReturn.push("Please choose Manicure or Pedicure");
    return aReturn;
  }

  currentState = upsell;

  aReturn.push(`Great choice 💅 ${selectedService}`);

  aReturn.push("Would you like an add-on?");
  aReturn.push("• Nail Art");
  aReturn.push("• Cuticle Oil");
  aReturn.push("Or type 'no'");

  return aReturn;
}

// 2) UPSELL
function upsell(sInput) {
  let aReturn = [];

  if (!sInput) {
    aReturn.push("Choose an add-on or type 'no'");
    return aReturn;
  }

  let input = sInput.toLowerCase().trim();

  if (input.includes("nail")) {
    addOn = "Nail Art";
    aReturn.push("Nail art added!");
  } 
  else if (input.includes("cuticle")) {
    addOn = "Cuticle Oil";
    aReturn.push("Cuticle oil added!");
  } 
  else if (input === "no") {
    addOn = "";
    aReturn.push("No add-ons selected 👍");
  } 
  else {
    aReturn.push("Please choose Nail Art, Cuticle Oil, or type 'no'");
    return aReturn;
  }

  currentState = confirming;

  aReturn.push("Confirm booking? (yes/no)");

  return aReturn;
}

// 3) CONFIRMATION
function confirming(sInput) {
  let aReturn = [];

  currentState = choosingService;

  if (sInput && sInput.toLowerCase().startsWith("y")) {
    let d = new Date();
    d.setHours(d.getHours() + 2);

    let summary = selectedService;
    if (addOn) summary += " + " + addOn;

    aReturn.push(`Your ${summary} is booked 💖`);
    aReturn.push(`Please arrive before ${d.toLocaleTimeString()}`);
  } 
  else {
    aReturn.push("No problem 💅");
    aReturn.push("You can book anytime!");
  }

  return aReturn;
}