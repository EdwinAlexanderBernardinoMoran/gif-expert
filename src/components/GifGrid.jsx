import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

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
      <ol>
        {
          images.map( ({ id, title, url }) => (
            <li key={id}>
            <p>{title}</p>
            <img src={url} alt={title} />
            </li>
          ))
        }
      </ol>
    </>
  )
}
