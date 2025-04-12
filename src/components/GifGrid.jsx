import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    
    // const [counter, setcounter] = useState(10)
    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
      getImages();
    }, [])
    
  return (
    <>
      <h3>{category}</h3>
      {/* <h5>{ counter }</h5>
      <button onClick={ () => setcounter(counter + 1)}>+1</button> */}
      <div className='card-grid'>
        {
          images.map( (image) => (
            <GifItem key={ image.id } { ...image }/>
          ))
        }
      </div>
    </>
  )
}
