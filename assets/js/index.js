// Player and robot initial health
const healthBar = {
  playerHealth: 500,
  robotHealth: 500,
};

// Initializing player and robot health
let playerHealth = healthBar.playerHealth;
let robotHealth = healthBar.robotHealth;

// getting Element of all three button
const startButton = document.getElementById("start");
const attackButton = document.getElementById("attack");
const restartButton = document.getElementById("restart");

// function to add and remove button
const add = (button) => button.classList.remove("display-none");
const remove = (button) => button.classList.add("display-none");

// Handle onclick even in start button
const startHandler = () => {
  //Hides start button and shows attack button
  add(attackButton);
  remove(startButton);
  // Display message on how to attack
  document.getElementById("game-message").innerHTML =
    "The game has started, click on attack. The robot will attack automatically.";
};

// Handles onClick event on attack button
const attackHandler = () => {
  // Removes message after attack is clicked
  document.getElementById("game-message").innerHTML = "";

  // Generates random damage value from 0 - 100
  const playerDamage = Math.floor(Math.random() * 100);
  const robotDamage = Math.floor(Math.random() * 100);

  // Calculates player and robots health after damage is delt
  playerHealth = playerHealth - playerDamage;
  robotHealth = robotHealth - robotDamage;

  // Display health remaining of player and robot
  document.querySelector("#player-damage").innerHTML = `${
    playerHealth >= 0 ? playerHealth : 0 //doesn't allow health to be less than 0
  } / 500 HP`;

  document.querySelector("#robot-damage").innerHTML = `${
    robotHealth >= 0 ? robotHealth : 0 //doesn't allow health to be less than 0
  } / 500 HP`;

  // Displays remaining health in healthbar
  document
    .getElementById("player-health")
    .setAttribute("value", `${playerHealth}`);

  document
    .getElementById("robot-health")
    .setAttribute("value", `${robotHealth}`);

  // Displays damage dealt by player and robot in dialogue
  const attackStatusBoxElement = document.getElementById("attack-stats-box");
  const newNodeInAttackStatusBox = document.createElement("p");
  newNodeInAttackStatusBox.innerHTML = `<p>>> Player delt ${robotDamage} damage to robot <<</p><p> >> Robot delt ${playerDamage} damage to player <<</p>`;
  attackStatusBoxElement.prepend(newNodeInAttackStatusBox);

  // Condition for who won the game
  if (playerHealth <= 0 && robotHealth <= 0) {
    document.getElementById("game-message").innerHTML = "Its a draw";
    add(restartButton);
    remove(attackButton);
  } else if (playerHealth <= 0) {
    document.getElementById("game-message").innerHTML =
      "Sorry, You lost. Robot is the winner";
    add(restartButton);
    remove(attackButton);
  } else if (robotHealth <= 0) {
    document.getElementById("game-message").innerHTML =
      "You are the winner!!! Congrats";
    add(restartButton);
    remove(attackButton);
  }
};

//Resets the game
const restartHandler = () => {
  // Resets player's and robot's healthbar and its value
  playerHealth = healthBar.playerHealth;
  robotHealth = healthBar.robotHealth;

  document.querySelector(
    "#player-damage"
  ).innerHTML = `${playerHealth} / 500 HP`;

  document
    .getElementById("player-health")
    .setAttribute("value", `${playerHealth}`);

  document.querySelector("#robot-damage").innerHTML = `${robotHealth} / 500 HP`;

  document
    .getElementById("robot-health")
    .setAttribute("value", `${robotHealth}`);

  // Restart button hides, Attack button shows
  add(attackButton);
  remove(restartButton);

  // Game restarts message
  document.getElementById("game-message").innerHTML =
    "Game restarted, Click on attack to attack";

  // sets attacks status block to empty
  document.getElementById("attack-stats-box").innerHTML = "";
};
