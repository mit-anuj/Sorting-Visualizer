function getDigit(element,place){
    return math.floor(element/Math.pow(10,place))%10
}

function digitCount(element){
    if(element===0)
        return 1
    
    return Math.floor(Math.log10(element)) +1
}

function maxDigit(element){
    let maxDigits= 0;

    for(let i=0;i<element.length;i++){
        maxDigits=Math.max(maxDigits,digitCount(element[i].style.height))
    }

    return maxDigits
}

async function radixSort(){
    const bar=document.querySelectorAll(".bar")
    let MaxDigit=maxDigit(bar)
    
}