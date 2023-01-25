// let hasStopped= new Boolean(false)

async function Partition(bar,start, end){
    let i=end-1;
    for(let j=start;j<=end-1;j++){
        if(hasPressedStop==true)
            return;
        
        bar[j].style.background="yellow"
        await delayFunction(delay)
        if(hasPressedStop==null)
            return ;
        
        if(parseInt(bar[j].style.height) < parseInt(bar[end].style.height))
        {
            i++;
            swap(bar[i],bar[j]);

            bar[j].style.background="orange";
            await delayFunction(delay);
        }
        
    }
    i++
    if(hasPressedStop==null)
        return;
    await delayFunction(delay);
    if(hasPressedStop==null)
        return ;

    swap(bar[i],bar[end]);

    bar[i].style.background="green";

    if(hasPressedStop==null)
        return;
    await delayFunction(delay);
    if(hasPressedStop==null)
        return;

    return i;
}

    async function quickSort(ele,start,end){
        let pivot =await Partition(ele,start,end);
        await quickSort(ele,start,pivot-1)
        await quickSort(ele,pivot+1,end);
    }

const quickSortBtn=document.querySelector(".quick");
quickSortBtn.addEventListener("click",async()=>{
    const bar=document.querySelectorAll(".bar");
    let start=0;
    let end=bar.length-1;
    await quickSort(bar,start,end);
    disableButton();

});

