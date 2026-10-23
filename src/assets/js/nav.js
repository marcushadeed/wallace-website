// Collapses the main nav behind a "Menu" button on small screens.
const toggle = document.querySelector(".site-nav__toggle");
if (toggle) {
  const setOpen = (open) => toggle.setAttribute("aria-expanded", String(open));
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  // Escape closes the open menu and returns focus to the button.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}
