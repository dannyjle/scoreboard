function main() {
  function updateTeamOneName(event) {
    const teamOneName = document.querySelector('.team1 h2')
    teamOneName.textContent = event.target.value
  }

  function updateTeamTwoName(event) {
    const teamTwoName = document.querySelector('.team2 h2')
    teamTwoName.textContent = event.target.value
  }

  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeamOneName)

  document
    .querySelector('.team2 input')
    .addEventListener('input', updateTeamTwoName)
}

document.addEventListener('DOMContentLoaded', main)
