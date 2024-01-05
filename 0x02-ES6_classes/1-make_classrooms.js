import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const numList = [19, 20, 34];

  const outList = [];

  for (const num of numList) {
    outList.push(new ClassRoom(num));
  }
  return outList;
}
