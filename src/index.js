const onClickAdd = () => {

  const textEl = document.querySelector("#add-text");
  const text = textEl.value;
  textEl.value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = text;
  const button =document.createElement("button");
  button.textContent = "削除";

  button.addEventListener("click", () => {
    const result = confirm("本当に削除しますか？");
    
    if (result) {
      const deleteTarget = button.closest("li");
      deleteTarget.remove();
    }
  });

  div.append(p);
  div.append(button);
  li.append(div);

  document.querySelector("#memo-list").append(li);

}

document.querySelector("#add-button").addEventListener("click", () => onClickAdd());