var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var index = katzDeliLine.indexOf(newName) + 1
  return `Welcome, ${newName}. You are number ${index} in line.`
}