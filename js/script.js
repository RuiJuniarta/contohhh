document.addEventListener("click", function(e) {
  const heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.className = "heart";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});
