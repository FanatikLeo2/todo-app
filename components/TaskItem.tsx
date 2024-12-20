'use client';

import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '@/redux/tasksSlice';
import { Task } from '@/redux/tasksSlice';
import Link from 'next/link';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <tr>
      <td>{task.id}</td>
      <td>
        <Link href={`/tasks/${task.id}`}>
          <span>{task.title}</span>
        </Link>
      </td>
      <td>
        <button
          onClick={handleToggle}
          className={task.completed ? 'btn-completed' : 'btn-pending'}
        >
          {task.completed ? 'Done' : 'Not completed'}
        </button>
      </td>
      <td>
        <button onClick={handleRemove}>Delete task</button>
      </td>
    </tr>
  );
}