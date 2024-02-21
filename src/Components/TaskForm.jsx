import { useState, useContext } from 'react';
import { TaskContext } from '../context/context';

function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDesciption] = useState('');

    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description,
        });
        setTitle('');
        setDesciption('');
    };

    return (
        <>
            <div className='max-w-md mx-auto bg-slate-500 rounded-md'>
                <form onSubmit={handleSubmit} className='p-10 mb-4'>
                    <h1 className='text-white text-2xl mb-3'>Crear tarea</h1>
                    <input
                        className='w-full mb-2 rounded-md'
                        type='text'
                        placeholder='Qué haremos hoy?'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        autoFocus
                        required
                    />
                    <textarea
                        className='w-full mb-3 rounded-md'
                        name='area'
                        cols='30'
                        rows='10'
                        placeholder='Description'
                        onChange={(e) => setDesciption(e.target.value)}
                        value={description}
                    ></textarea>
                    <button className='bg-indigo-500 px-2 rounded-md mt-2 hover:bg-indigo-300'>
                        Guardar
                    </button>
                </form>
            </div>
        </>
    );
}

export default TaskForm;
