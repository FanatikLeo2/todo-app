'use client';

import { Task } from '@/redux/tasksSlice';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {tasks.slice().reverse().map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        </tbody>
      </table>
    </div>
  );
}