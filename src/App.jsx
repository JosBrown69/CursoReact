import TaskList from './Components/TaskList.jsx';
import TaskForm from './Components/TaskForm.jsx';

function App() {
    return (
        <main className='bg-zinc-900 h-screen'>
            <div className='container mx-auto'>
                <TaskForm />
                <TaskList />
            </div>
        </main>
    );
}

export default App;
