const healthBar = {
  player_health: 500,
  robot_health: 500,
};
const startHandler = () => {
  console.log("hello");
  document.getElementById("attack").classList.remove("display-none");
  document.getElementById("attack").classList.add("display-block");
  document.getElementById("start").classList.remove("display-block");
  document.getElementById("start").classList.add("display-none");
};

let player_health = healthBar.player_health;
let robot_health = healthBar.robot_health;

const attackHandler = () => {
  const player_damage = Math.floor(Math.random() * 100);
  const robot_damage = Math.floor(Math.random() * 100);

  player_health = player_health - player_damage;
  robot_health = robot_health - robot_damage;

  document
    .getElementById("player_health")
    .setAttribute("value", `${player_health}`);

  let player_0_health = player_health >= 0 ? player_health : 0;
  document.querySelector("#player-damage").innerHTML = `${player_0_health} HP`;

  document
    .getElementById("robot_health")
    .setAttribute("value", `${robot_health}`);

  let robot_0_health = robot_health >= 0 ? robot_health : 0;
  document.querySelector("#robot-damage").innerHTML = `${robot_0_health} HP`;

  console.log(player_health);
  console.log(robot_health);

  const x = document.getElementById("test");
  const y = document.createElement("p");
  y.innerHTML = `<p>>> Player delt ${robot_damage} damage to robot <<</p><p> >> Robot delt ${player_damage} damage to player <<</p>`;
  x.prepend(y);

  if (player_health <= 0 && robot_health <= 0) {
    document.getElementById("playerLost").innerHTML = "Its a draw";
    document.getElementById("attack").classList.add("display-none");
    document.getElementById("attack").classList.remove("display-block");
    document.getElementById("restart").classList.remove("display-none");
    document.getElementById("restart").classList.add("display-block");
  } else if (player_health <= 0) {
    document.getElementById("playerLost").innerHTML =
      "Sorry, You lost. Robot is the winner";
    document.getElementById("attack").classList.add("display-none");
    document.getElementById("attack").classList.remove("display-block");
    document.getElementById("restart").classList.remove("display-none");
    document.getElementById("restart").classList.add("display-block");
  } else if (robot_health <= 0) {
    document.getElementById("playerLost").innerHTML =
      "You are the winner!!! Congrats";
    document.getElementById("attack").classList.add("display-none");
    document.getElementById("attack").classList.remove("display-block");
    document.getElementById("restart").classList.remove("display-none");

    document.getElementById("restart").classList.add("display-block");
  }
};

const restartHandler = () => {
  player_health = healthBar.player_health;
  robot_health = healthBar.robot_health;
  document.getElementById("restart").classList.add("display-none");
  document.getElementById("restart").classList.remove("display-block");
  document.getElementById("attack").classList.remove("display-none");
  document.getElementById("attack").classList.add("display-block");
  document
    .getElementById("player_health")
    .setAttribute("value", `${player_health}`);
  document
    .getElementById("robot_health")
    .setAttribute("value", `${robot_health}`);
  document.getElementById("playerLost").innerHTML = "";
  document.getElementById("test").innerHTML = "";
};
