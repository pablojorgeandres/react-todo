import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState();
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => { //simulate loading (as it be from an API)
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false)
        } catch(error) {
          setError(error)
        }
      }, 1000)
    });
  
    const saveItems = (newItems) => {
      try{
        const stringifiedItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifiedItems);
        setItem(newItems);
      } catch(error) {
        setError(error)
      }
    }
  
    return {
      item,
      saveItems,
      loading,
      error
    };
  }

  export { useLocalStorage };