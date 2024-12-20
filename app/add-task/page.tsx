'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '@/redux/tasksSlice';
import { RootState } from '@/redux/store';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleAddTask = () => {
    const maxId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;

    const newTask = {
      id: maxId + 1,
      title,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];

    dispatch(setTasks(updatedTasks));
    router.push('/');
  };

  return (
    <div>
      <h1>Create task</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the task"
      />
      <button onClick={handleAddTask}>Save</button>
    </div>
  );
}