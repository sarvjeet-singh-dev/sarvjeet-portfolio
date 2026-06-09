export const storage = {
    get : (value,) => {
        try {

            const getData = JSON.parse(localStorage.getItem(value));
            return getData
        
        }catch(error){
            console.error("Error Getting From Local Storage",error);
        };
    },
    
    set :(key,value) => {
        try {
            
            const setData = localStorage.setItem(key,JSON.stringify(value));
            return setData ;
            
        }catch(error){
            console.error("Error Saving to Local Storage",error);
        };
    },
};