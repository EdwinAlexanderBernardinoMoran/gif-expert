import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories([...categories, 'HunterXHunter']);
  }

  return (
    <>
      {/* Titulo */}
      <h2>GifExpertApp</h2>

      {/* Input  */}
      <AddCategory/>
      {/* Listado de Gif */}
      <button onClick={ onAddCategory}>Agregar</button>
      <ol>
        {
          categories.map(category => (
            <li key={category}>{category}</li>
          ))
        }
      </ol>
    </>
  )
}
