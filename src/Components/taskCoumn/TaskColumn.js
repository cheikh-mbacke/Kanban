import "./TaskColumn.css";

export default function TaskColumn(title) {
  const addTask = (event) => {
    event.preventDefault();

    const taskEditForm = event.target;

    const addTaskBtn = taskEditForm.querySelector(".add_task_btn");
    addTaskBtn.classList.add("hide_element");

    const editField = taskEditForm.querySelector(".edit_field");
    editField.classList.remove("hide_element");
    editField.classList.remove("display_element");
  };

  const template = document.createElement("article");
  template.className = "task_colmn_container";
  template.innerHTML = `
    <h2>${title}</h2>
    <div class="task_list"></div>
    <form class="task_edit_form">
        <div class="edit_field hide_element">
            <textarea></textarea>
            <button type="submit">Ajouter</button>
        </div>
        <button class="add_task_btn" type="submit">+ Ajouter une tâche</button>
    </form>
  `;

  const form = template.querySelector(".task_edit_form");
  form.addEventListener("submit", addTask);

  return template;
}
