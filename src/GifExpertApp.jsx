import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {

    // Validar si la categoria ya existe
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);    
  }

  return (
    <>
      {/* Titulo */}
      <h2>GifExpertApp</h2>

      {/* Input  */}
      {/* <AddCategory setCategories = { setCategories }/> */}

      {/* Propiedad onNewCategory */}
      <AddCategory onNewCategory={ onAddCategory }/>

      {/* Listado de Gif */}
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
