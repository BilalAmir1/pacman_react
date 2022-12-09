import { DIRECTIONS, OBJECT_TYPE } from './setup';

// random movement fun
export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;
  // array from the diretions objects keys
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    // random key from the array
    const key = keys[Math.floor(Math.random() * keys.length)];
    // new direction
    dir = DIRECTIONS[key];
    // next move
    nextMovePos = position + dir.movement;
  }

  return { nextMovePos, direction: dir };
}
