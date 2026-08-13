export default function TaskList({ taskList }) {
  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id}>
          {task.title} {task.completed ? '✅' : '⏳'}
        </li>
      ))}
    </ul>
  );
}
