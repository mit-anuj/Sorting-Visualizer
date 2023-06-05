let hasPressedStopped= new Boolean(false)

async function SelectionSort(){
    const bar=document.querySelectorAll(".bar")
    for(let index=0; index<bar.length; index++){
        if(hasPressedStop==true)
            return
        let min_index=index;
        // Change the color of the bar being compared
        bar[index].style.background="#e85d04"
        

        for(i=index+1; i<bar.length; i++){
            if(hasPressedStop==true)
            return
            // change the color of the current bar
            bar[i].style.background='green'

            await delayFunction(delay)
            if(hasPressedStop==true)
            return

            if(parseInt(bar[i].style.height)<parseInt(bar[min_index].style.height))
            {
                if(min_index!==i){
                    bar[min_index].style.background="#9a031e"
                }
                min_index=i
            }
            else
                bar[i].style.background="#9a031e"
        }
        await delayFunction(delay)
        if (hasPressedStopped==true)
        return;
        swap(bar[min_index],bar[index])
        bar[min_index].style.background="#9a031e"
        bar[index].style.background="#005f73"
    }
}

let selectbtn=document.querySelector(".selection")
selectbtn.addEventListener("click",async () => {
    disableButton();
    disableSizeSlider();
    disableResetBtn();
    enableStopBtn();
    await SelectionSort();
    if(hasPressedStopped==true){
        disableSpeedSlider();
    }
    else{
        enableResetBtn();
        disableStopBtn();
        disableSpeedSlider();
    }

})