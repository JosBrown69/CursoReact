import { useContext } from 'react';
import { TaskContext } from '../context/context';

function TaskCard({ tasks }) {

    const {deleteTask} = useContext(TaskContext)

    return (
        <div className='bg-gray-600 text-white p-4 rounded-md'>
            <h1 className='font-bold text-xl capitalize'>{tasks.title}</h1>
            <p className='text-gray-400 text-sm'>{tasks.description}</p>
            <button className='bg-red-500 px-2 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(tasks.id)}>Eliminar</button>
        </div>
    );
}

export default TaskCard;
