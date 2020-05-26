function titleCaseEdit(title) {
  var text = title.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
  return text;
}

// Do not edit this line;
module.exports = titleCaseEdit;