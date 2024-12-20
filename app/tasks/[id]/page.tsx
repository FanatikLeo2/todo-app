'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { toggleTask } from '@/redux/tasksSlice';
import { useRouter, useParams } from 'next/navigation';

export default function TaskDetail() {
  const params = useParams();
  const taskIdString = params.id;

  const taskId = Array.isArray(taskIdString) ? taskIdString[0] : taskIdString;

  if (!taskId) {
    return <div>Task not found</div>;
  }

  const taskIdNumber = parseInt(taskId, 10);

  if (isNaN(taskIdNumber)) {
    return <div>Task not found</div>;
  }

  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task.id === taskIdNumber)
  );

  const dispatch = useDispatch();
  const router = useRouter();

  if (!task) return <div>Task not found</div>;

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>{task.title}</h1>
      <button
          onClick={handleToggle}
          className={task.completed ? 'btn-completed' : 'btn-pending'}
        >
          {task.completed ? 'Done' : 'Not copleted'}
        </button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}