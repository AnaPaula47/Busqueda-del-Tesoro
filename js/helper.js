// Genera un numero random
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);//es el límite superior (no inclusivo) del rango del número aleatorio
}

// Ingreso de la distancia de un punto a otro
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// Esta funcion pasa la informacion de la distancia de los puntos a textos
let getDistanceHint = distance => {
  if (distance < 30) {
    return "Hirviendo!";
  } else if (distance < 40) {
    return "Muy caliente";
  } else if (distance < 60) {
    return "Caliente";
  } else if (distance < 100) {
    return "Cálido";
  } else if (distance < 180) {
    return "Frío";
  } else if (distance < 360) {
    return "Realmente frío";
  } else {
    return "Congelado!";
  }
}