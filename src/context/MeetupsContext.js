import React, { createContext, useState } from 'react'

export const Meetups = createContext();

export const MeetupsProvider = ({children}) => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  

  const onChangeTitle = event => {
    setTitle(event.target.value);
  };
  const onChangeImage = event => {
    setImage(event.target.value);
  };
  const onChangeAddress = event => {
    setAddress(event.target.value);
  };
  const onChangeDescription = event => {
    setDescription(event.target.value);
  };

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
    <Meetups.Provider value={{isItFav, toggleFav, onChangeTitle, onChangeImage, onChangeAddress, onChangeDescription, favItems, favs, title, image, address, description}}>
        {children}
    </Meetups.Provider>
  )
}

export default MeetupsProvider