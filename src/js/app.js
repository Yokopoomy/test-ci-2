export default function sortByHealth(items) {
  return items.sort((x, y) => y.health - x.health);
}
