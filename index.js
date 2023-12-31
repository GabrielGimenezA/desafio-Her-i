const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeHeroi) => {
  rl.question('Digite a quantidade de XP do herói: ', (xpHeroi) => {
    xpHeroi = parseInt(xpHeroi);
    const nivel = determinarNivel(xpHeroi);
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
    rl.close();
  });
});

function determinarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}
