let d = 0
let r = 0
let circ = 0
let area = 0

document.getElementById('circ').addEventListener('click', number1)
document.getElementById('area').addEventListener('click', number2)

// This is the circumference
function number1 () {
  d = document.getElementById('diameter').value

  d = parseInt(d)

  r = (d / 2)

  circ = (2 * Math.PI * r)

  document.getElementById('answerc').innerHTML = 'The circumference of a circle with this diameter = ' +circ
}

// This is the area
function number2 () {
  d = document.getElementById('diameter').value

  d = parseInt(d)

  r = (d / 2)

  area = (Math.PI * r * r)

  document.getElementById('answera').innerHTML = 'The area of a circle with this diameter = ' +area
}
