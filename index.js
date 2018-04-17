var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var index = katzDeliLine.indexOf(newName) + 1
  return `Welcome, ${newName}. You are number ${index} in line.`
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var beingServed = array[0]
    array.shift(beingServed)
    return `Currently serving ${beingServed}.`
  }
}

function currentLine() {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    lineStatus = "The line is currently: "
    for (n = 0; n < katzDeliLine.length; n++) {
      var name = katzDeliLine[n]
      var position = n + 1
      lineStatus = (lineStatus + `${position}. ${name}`)
    }
    lineStatus = str
    return lineStatus
  }
}