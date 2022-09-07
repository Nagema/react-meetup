import React, { createContext, useState } from 'react'

export const Meetups = createContext();

export const MeetupsProvider = ({children}) => {

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
    <Meetups.Provider value={{isItFav, toggleFav, favItems, favs}}>
        {children}
    </Meetups.Provider>
  )
}

export default MeetupsProvider