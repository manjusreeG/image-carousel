import './App.css';
import DemoPage from './demo/DemoPage';

function App() {

  return (
    <div className='max-w-5xl mx-auto p-4 rounded-xl shadow-md border-1 border-gray-300' role='region' aria-roledescription='carousel' aria-label='Image Carousel'>
      <h1 className='text-2xl font-extrabold text-center'>Image Carosuel</h1>
      <div className="mt-6 bg-gray-800 p-6 text-white rounded-xl">
        <DemoPage />
      </div>
    </div>
  )
}

export default App
