import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import filterTasks from './utils/filterTasks.js';
import FilterButton from './components/FilterButton.jsx';
import TaskList from './components/TaskList';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  const { tasks, loading } = useTasks();

  if (loading) {
    return <p>Loading tasks...</p>;
  }
  return (
    <div>
      <h2>Welcome, Student</h2>

      <div>
        <FilterButton setFilter={setFilter} filter={'all'} />
        <FilterButton setFilter={setFilter} filter={'completed'} />
        <FilterButton setFilter={setFilter} filter={'pending'} />

        <p>Current filter: {filter}</p>
      </div>

      <TaskList taskList={filterTasks(tasks, filter)} />
    </div>
  );
}
