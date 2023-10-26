const refs = {
  filter: document.querySelector(".filter-js"),
  workListItem: document.querySelectorAll(".work-list-item"),
};

refs.filter.addEventListener("click", onFilterBtnClick);

function onFilterBtnClick(e) {
  if (e.target.nodeName !== "BUTTON") return;

  const currentActiveBtn = document.querySelector(".primary");
  const nextActiveBtn = e.target;
  console.log("currentActiveBtn", currentActiveBtn);
  console.log("e.target", nextActiveBtn);

  if (currentActiveBtn !== nextActiveBtn) {
    currentActiveBtn.classList.replace("primary", "secondary");
    nextActiveBtn.classList.replace("secondary", "primary");
    refs.workListItem.forEach((item) => {
      console.log(item.classList);
      item.classList.remove("display-none");

      console.log("nextActiveBtn.dataset.type", nextActiveBtn.dataset.type);
      console.log("item.dataset.type", item.dataset.type);
      console.log(nextActiveBtn.dataset.type === item.dataset.type);

      if (nextActiveBtn.dataset.type !== item.dataset.type) {
        if (nextActiveBtn.dataset.type === "all") return;

        item.classList.add("display-none");
      }
    });
  }

  console.log(refs.workListItem);
}
