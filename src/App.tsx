import './App.css';
import ImageContainer from './components/ImageCarousel/ImageContainer';

const demoImages = [{
  src: 'https://images.unsplash.com/photo-1520974735194-7f4da3a0b2ed?q=80&w=1600&auto=format&fit=crop',
  alt: "Sunlit mountain ridge",
  caption: "Explore — A crisp morning over the Alps"
},
{
  src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  alt: "Desert dunes at dusk",
  caption: "Drift — Dune lines meeting purple skies"
},
{
  src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop',
  alt: "Forest trail with fog",
  caption: "Breathe — Misty pines and a quiet path"
},
{
  src: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1600&auto=format&fit=crop',
  alt: "City skyline at night",
  caption: "Shine — City lights under the stars"
}];


function App() {

  return (
    <div className='max-w-5xl mx-auto p-4 rounded-xl shadow-md'>
      <h1 className='text-2xl font-extrabold text-center'>Image Carosuel</h1>
      <div className="mt-6 bg-gray-800 p-6 text-white rounded-xl">
        <ImageContainer />
      </div>
    </div>
  )
}

export default App
