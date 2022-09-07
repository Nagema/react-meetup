import React, { createContext, useState } from 'react'

export const Favorite = createContext();

export const FavoriteProvider = ({children}) => {

    const [favs, setFavs] = useState([]);

    const isItFav = (item) => {
        return favs.some( element => element.id === item.id);
      };

    let favItems = favs.length;

    const toggleFav = (item) => {
        const sameItem = isItFav(item);
        if(!sameItem){
            setFavs([...favs, item]);
        } else {
            const newFavs = favs.filter(fav =>(fav.id !== item.id));
            setFavs(newFavs);
        }
    }

  return (
    <Favorite.Provider value={{isItFav, toggleFav, favItems, favs}}>
        {children}
    </Favorite.Provider>
  )
}

export default FavoriteProvider