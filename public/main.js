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

  // Adds to Team One's score
  let teamOneCounter = 0
  function addTeamOneScore() {
    if (teamOneCounter >= 21) {
      console.log('WINNER')
      window.alert('--- CONGRATULATIONS YOUR TEAM WINS!!!! ---')
      return
    }
    teamOneCounter++
    const teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = teamOneCounter
  }
  document
    .querySelector('.team1 .add')
    .addEventListener('click', addTeamOneScore)

  // Subtracts Team One's score
  function subTeamOneScore() {
    if (teamOneCounter <= 0) {
      console.log('NO NEGATIVES')
      window.alert('--- NEGATIVE POINTS ARE NOT ALLOWED ---')
      return
    }
    teamOneCounter--
    const teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = teamOneCounter
  }
  document
    .querySelector('.team1 .subtract')
    .addEventListener('click', subTeamOneScore)

  // Adds to Team Two's score
  let teamTwoCounter = 0
  function addTeamTwoScore() {
    if (teamTwoCounter >= 21) {
      console.log('WINNER')
      window.alert('--- CONGRATULATIONS YOUR TEAM WINS!!!! ---')
      return
    }
    teamTwoCounter++
    const teamTwoScore = document.querySelector('.team2 h3')
    teamTwoScore.textContent = teamTwoCounter
  }
  document
    .querySelector('.team2 .add')
    .addEventListener('click', addTeamTwoScore)

  // Subtracts Team Two's score
  function subTeamTwoScore() {
    if (teamTwoCounter <= 0) {
      console.log('NO NEGATIVES')
      window.alert('--- NEGATIVE POINTS ARE NOT ALLOWED ---')
      return
    }

    teamTwoCounter--
    const teamTwoScore = document.querySelector('.team2 h3')
    teamTwoScore.textContent = teamTwoCounter
  }
  document
    .querySelector('.team2 .subtract')
    .addEventListener('click', subTeamTwoScore)

  const resetScore = 0
  function resetScores(event) {
    teamOneScore = document.querySelector('.team1 h3')
    teamTwoScore = document.querySelector('.team2 h3')
    teamOneScore.textContent = resetScore
    teamTwoScore.textContent = resetScore
  }

  document.querySelector('footer').addEventListener('click', resetScores)
}

document.addEventListener('DOMContentLoaded', main)
