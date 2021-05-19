let teamOne = document.querySelector('h2')
const inputElement = document.querySelector('input')

function main() {}

function addTeamName(event) {
  const currentInputValue = event.target.value
  teamOne.innerText = currentInputValue
}
inputElement.addEventListener('input', addTeamName)

document.addEventListener('DOMContentLoaded', main)
