import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';

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
            </Routes>
        </div>
    );
}

export default App;
