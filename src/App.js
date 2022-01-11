import './App.css';
import {useState, useEffect} from 'react'
import GalleryFrame from './galleryframe';
import ButtonBar from './buttonbar';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  const handleIterate = e =>{
    setArtId(artId + Number(e.target.value))
  }
  useEffect(()=>{
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])
  
  return (
    <div className="App">
      <GalleryFrame objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title}></GalleryFrame>
      <ButtonBar handleIterate={handleIterate}></ButtonBar>
    </div>
  );
}

export default App
