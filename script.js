const zoom = function () {
  document
    .querySelector(".image-zoomer-box")
    .addEventListener("mousemove", function (e) {
      const original = document.querySelector(".image-1"),
        magnified = document.querySelector(".image-2"),
        style = magnified.style,
        x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        imgWidth = original.offsetWidth,
        imgHeight = original.offsetHeight,
        xperc = (x / imgWidth) * 100,
        yperc = (y / imgHeight) * 100;
      style.backgroundPositionX = xperc + "%";
      style.backgroundPositionY = yperc + "%";
      console.log(x, y);
      style.top = y - 150 + "px";
      style.left = x - 150 + "px";
    });
};
zoom();
