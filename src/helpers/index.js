const hex_to_ascii = (find) => {
  var hex = find.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
};

export const getCleanString = (word) => {
  word = hex_to_ascii(word);
  word = word.replace(/[^a-zA-Z-@^&*()^<>%$#'" ]/g, "");
  return word.trim();
};
