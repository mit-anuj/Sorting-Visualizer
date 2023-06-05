async function Partition(bar,start, end){
    let i=start-1;
    bar[end].style.background='black'; //pivot
    for(let j=start;j<=end-1;j++){
        if(hasPressedStop==true)
            return;
        
        bar[j].style.background="teal" // current element
        await delayFunction(delay)
        if(hasPressedStop==true)
            return ;
        
        if(parseInt(bar[j].style.height) < parseInt(bar[end].style.height))
        {
            i++;
            swap(bar[i],bar[j]);

            bar[i].style.background="blue";
            if(i!=j)bar[j].style.background='blue'
            await delayFunction(delay);
        }
        else{
            //color if not less than pivot\
            bar[j].style.background='grey'
        }
    }   
    i++
    if(hasPressedStop==true)
        return;
    await delayFunction(delay);
    if(hasPressedStop==true)
        return ;

    swap(bar[i],bar[end]);
    bar[end].style.background='grey';
    bar[i].style.background="green";

    if(hasPressedStop==true)
        return;
    await delayFunction(delay);
    if(hasPressedStop==true)
        return;

    return i;
}

    async function quickSort(ele,start,end){
        if (start<end) {
            
            let pivot =await Partition(ele,start,end);
            console.log(pivot)
            await quickSort(ele,start,pivot-1)
            console.log(pivot)
            await quickSort(ele,pivot+1,end);
        }
        else{
            if(start >= 0 && end >= 0 && start <ele.length && end <ele.length){
                ele[end].style.background = 'green';
                ele[start].style.background = 'green';
            }
        }
    }

const quickSortBtn=document.querySelector(".quick");
quickSortBtn.addEventListener("click",async()=>{
    hasPressedStop=false;
    enableStopBtn()
    disableButton();
    disableSizeSlider();
    disableResetBtn();
    const bar=document.querySelectorAll(".bar");
    let start=0;
    let end=bar.length-1;
    await quickSort(bar,start,end);

    if(hasPressedStop==true){
        disableSpeedSlider();
    }else{
        enableResetBtn()
        disableStopBtn()
        disableSpeedSlider();
    }
    

});

