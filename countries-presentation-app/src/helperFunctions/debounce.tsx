

    const debounce = (fn: (val: React.ChangeEvent<HTMLInputElement>) => void, delay:number)=>{
        let timeoutID:number
        return function (val: React.ChangeEvent<HTMLInputElement>){
            
            if(timeoutID){
                clearTimeout(timeoutID)
            }
                timeoutID = window.setTimeout(()=>{
                    fn(val)
                },delay);
           
        }
    }

    export {debounce};

