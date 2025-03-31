// JavaScript to enhance interaction (optional)
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("rotatingText");
  textElement.addEventListener("mouseover", () => {
    textElement.style.color = "#ff5733"; // Change color on hover
  });

  textElement.addEventListener("mouseout", () => {
    textElement.style.color = "#007bff"; // Revert color on mouse out
  });
});
