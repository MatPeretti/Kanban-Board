import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import StartFreeTrial from './pages/StartFreeTrial';
import Board from './pages/Board';
import { Tasks } from './pages/Tasks';
import { useKanbanBoard } from './hooks/useKanbanBoard';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

function App() {
    const { columns } = useKanbanBoard();
    const allTasks = columns.flatMap((column) => column.tasks);

    return (
        <div className='flex min-h-screen flex-col bg-gradient-to-b from-gray-900 to-black text-white'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/register' element={<Register />} />
                <Route path='/start-free-trial' element={<StartFreeTrial />} />
                <Route path='/board' element={<Board />} />
                <Route path='/tasks' element={<Tasks tasks={allTasks} />} />
            </Routes>
        </div>
    );
}

export default App;
