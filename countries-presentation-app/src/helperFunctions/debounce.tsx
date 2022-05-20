

    const debounce = (fn:any, delay:number)=>{
        let timeoutID:any;
        return function (...args:[]){
            if(timeoutID){
                clearTimeout(timeoutID)
            }
            timeoutID = setTimeout(()=>{
                fn(...args)
            },delay);
        }
    }

    export {debounce};

