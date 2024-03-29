import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/context';

function TaskList() {

    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return <h1 className='text-white text-2xl'>No hay tareas aun</h1>;
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map((tasks) => (
                <TaskCard tasks={tasks} key={tasks.id} />
            ))}
        </div>
    );
}

export default TaskList;
