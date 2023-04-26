const content = document.querySelectorAll(".adhd-text");

const toADHD = (phrase) => {
  return phrase
    .split(' ')
    .map(word => word.substring(0, 3).bold() + word.slice(3))
    .join(' ');
};

content.forEach(element => {
  element.innerHTML = toADHD(element.textContent)
});






