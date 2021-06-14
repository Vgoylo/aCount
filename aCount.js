function aCount(arr){
    let result = 0;

    arr.forEach(element => {
        if (element.includes('a')){
            result += 1;
        }
        
    });
    return result;
}
