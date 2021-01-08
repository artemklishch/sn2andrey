export default function(elem, typemousemove) {
  if (
    !elem.classList.contains("circle") &&
    !elem.classList.contains("popup__text")
  ) {
    return;
  }

  if (
    typemousemove === "mouseover" &&
    elem.classList.contains("circle") &&
    elem.classList.contains("three")
  ) {
    elem.children[0].style.display = "flex";
    setOpacity(elem.children[0]);
  } else if (
    typemousemove === "mouseover" &&
    elem.classList.contains("popup__text")
  ) {
    elem.closest(".popup").style.display = "flex";
    setTimeout(() => {
      elem.closest(".popup").style.opacity = "1";
    }, 501);
  } else if (
    typemousemove === "mouseout" &&
    elem.classList.contains("popup__text")
  ) {
    elem.closest(".popup").style.display = "none";
  } else if (
    typemousemove === "mouseover" &&
    elem.classList.contains("circle")
  ) {
    elem.children[1].style.display = "flex";
    setOpacity(elem.children[1]);
  } else if (
    typemousemove === "mouseout" &&
    elem.classList.contains("circle") &&
    elem.classList.contains("three")
  ) {
    elem.children[0].style.display = "none";
    setTimeout(() => {
      elem.children[0].style.opacity = "0";
    }, 500);
  } else if (
    typemousemove === "mouseout" &&
    elem.classList.contains("circle")
  ) {
    elem.children[1].style.display = "none";
    setTimeout(() => {
      elem.children[1].style.opacity = "0";
    }, 500);
  }
}

function setOpacity(elem) {
  const timer = setInterval(() => {
    const opacity = Number(elem.style.opacity) || 0;
    elem.style.opacity = (opacity + 0.1).toString();
    if (Number(elem.style.opacity) >= 1) clearInterval(timer);
  }, 100);
}
