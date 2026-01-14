const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o nome do herói: ", (nomeHeroi) => {
  rl.question("Digite o XP do herói: ", (xpInput) => {
    let xp = Number(xpInput);
    let ranking = "";

    if (xp < 1000) {
      ranking = "Ferro";
    } else if (xp <= 2000) {
      ranking = "Bronze";
    } else if (xp <= 5000) {
      ranking = "Prata";
    } else if (xp <= 7000) {
      ranking = "Ouro";
    } else if (xp <= 8000) {
      ranking = "Platina";
    } else if (xp <= 9000) {
      ranking = "Ascendente";
    } else if (xp <= 10000) {
      ranking = "Imortal";
    } else {
      ranking = "Radiante";
    }

    console.log(`\nO herói ${nomeHeroi} tem ${xp} de XP e está no ranking ${ranking}`);
    rl.close();
  });
});
