const shareIcon = document.querySelector("[data-share-icon]");
const socialsContainer = document.querySelector("[data-socials-container]");
const preview = document.querySelector("[data-preview]");
shareIcon.addEventListener("click", () => {
  socialsContainer.classList.toggle("display-icons");
});
