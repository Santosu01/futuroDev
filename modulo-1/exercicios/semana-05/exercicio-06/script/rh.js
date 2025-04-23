const button = document.querySelector("button");

const toggleTableView = () => {
  const tableContainer = document.getElementById("table-container");

  if (!tableContainer) {
    return;
  }

  tableContainer.classList.toggle("hide");
};

button?.addEventListener("click", () => {
  toggleTableView();
});
