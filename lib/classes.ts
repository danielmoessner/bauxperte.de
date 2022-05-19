export function classes(dynamic, classes = "") {
  return Object.entries(dynamic)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(" ")
    .concat(" ")
    .concat(classes);
}
