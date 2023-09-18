function scuberGreetingForFeet(rideDistance){
  let greeting;
  if (rideDistance <= 400) {
    greeting = 'This one is on me!';
    return greeting;
  }else if (rideDistance > 2000 && rideDistance < 2500) {
    greeting = 'I will gladly take your thirty bucks.';
    return greeting;
  } else if (rideDistance > 2500) {
    greeting= 'No can do.'
    return greeting;
  }
}

function ternaryCheckCity(city){
  let message = (city === 'NYC') ? 'Ok, sounds good.': 'No go.';
  return message;
}

function switchOnCharmFromTip(tip){
  let message;
  switch (tip) {
    case 'generous':
      message = "Thank you so much."
      break;
    case 'not as generous':
      message = 'Thank you.'
      break;
    default:
      message ="Bye."
      break;
  }
  return message;  
}