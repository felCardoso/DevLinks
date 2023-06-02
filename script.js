function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Get img tag
  const img = document.querySelector("#profile img")

  //Change image
  if (html.classList.contains("light")) {
    // Light mode
    img.setAttribute("src", "./assets/avatar-dark.png")
  } else {
    // Dark mode
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
