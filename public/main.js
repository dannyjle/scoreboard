function main() {
  function updateTeamOneName(event) {
    const teamOneName = document.querySelector('.team1 h2')
    teamOneName.textContent = event.target.value
  }
  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeamOneName)

  function updateTeamTwoName(event) {
    const teamTwoName = document.querySelector('.team2 h2')
    teamTwoName.textContent = event.target.value
  }
  document
    .querySelector('.team2 input')
    .addEventListener('input', updateTeamTwoName)

  let teamOneCounter = 0
  function addTeamOneScore() {
    teamOneCounter++
    const teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = teamOneCounter
  }
  document
    .querySelector('.team1 .add')
    .addEventListener('click', addTeamOneScore)

  let teamTwoCounter = 0
  function addTeamTwoScore() {
    teamTwoCounter++
    const teamTwoScore = document.querySelector('.team2 h3')
    teamTwoScore.textContent = teamTwoCounter
  }
  document
    .querySelector('.team2 .add')
    .addEventListener('click', addTeamTwoScore)

  // Subtracts Team One's score
  function subTeamOneScore() {
    teamOneCounter--
    const teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = teamOneCounter
  }
  document
    .querySelector('.team1 .subtract')
    .addEventListener('click', subTeamOneScore)

  // Subtracts Team Two's score
  function subTeamTwoScore() {
    teamTwoCounter--
    const teamTwoScore = document.querySelector('.team2 h3')
    teamTwoScore.textContent = teamTwoCounter
  }
  document
    .querySelector('.team2 .subtract')
    .addEventListener('click', subTeamTwoScore)
}

document.addEventListener('DOMContentLoaded', main)
