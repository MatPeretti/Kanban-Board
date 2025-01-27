import Header from './components/layout/Header';
import Home from './components/home/Home';

function App() {
    return (
        <div className='flex min-h-screen flex-col bg-gradient-to-b from-gray-900 to-black text-white'>
            <Header />
            <Home />
        </div>
    );
}

export default App;
