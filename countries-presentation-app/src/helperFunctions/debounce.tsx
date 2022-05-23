

    const debounce = (fn:Function, delay:number)=>{
        let timeoutID:number
        return function (...args:[]){
            
            if(timeoutID){
                clearTimeout(timeoutID)
            }
                timeoutID = window.setTimeout(()=>{
                    fn(...args)
                },delay);
           
        }
    }

    export {debounce};

