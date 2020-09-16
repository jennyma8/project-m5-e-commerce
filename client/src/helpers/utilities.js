export function returnCategoryNameFromURL(path) {
  const urlArray = path.toString().split("/");

  return urlArray[urlArray.length - 1].split("%20").join(" ");
}
