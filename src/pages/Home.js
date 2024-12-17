import TaskColumn from "../Components/taskCoumn/TaskColumn";

export default function Home() {
  const main = document.createElement("main");
  const section = document.createElement("section");

  const columns = ["À faire", "En cours", "Terminées"];
  columns.forEach((column) => section.appendChild(TaskColumn(column)));
  main.appendChild(section);

  return main;
}
