function Player(isComputer = false) {
  let playerAttacks = new Set();

  const getAttackFromUser = () => {
    //prompt
  };
  // return: {x, y}
  const getAttack = () => {
    return isComputer ? randomAttack() : getAttackFromUser();
  };

  const randomAttack = () => {
    let coordinateX = Math.floor(Math.random() * 10);
    let coordinateY = Math.floor(Math.random() * 10);

    while (playerAttacks.has(`${coordinateX}.${coordinateY}`)) {
      coordinateX = Math.floor(Math.random() * 10);
      coordinateY = Math.floor(Math.random() * 10);
    }

    playerAttacks.add(`${coordinateX}.${coordinateY}`);

    return {
      x: coordinateX,
      y: coordinateY,
    };
  };

  return {
    getAttack,
  };
}

module.exports = Player;
