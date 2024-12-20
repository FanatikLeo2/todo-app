'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '@/redux/tasksSlice';
import { RootState } from '@/redux/store';
import axios from 'axios';
import TaskList from '@/components/TaskList';
import Link from 'next/link';

export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const isLoaded = useSelector((state: RootState) => state.tasks.isTasksLoaded);

  useEffect(() => {
    if (!isLoaded) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          dispatch(setTasks(response.data));
        })
        .catch((error) => {
          console.error('Error fetching tasks:', error);
        });
    }
  }, [dispatch, isLoaded]);

  return (
    <div>
      <h1>Tasks list</h1>
      <Link href="/add-task">
        <button>Create Task</button>
      </Link>
      <TaskList tasks={tasks} />
    </div>
  );
}
