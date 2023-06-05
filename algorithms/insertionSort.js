// let hasPressedStopped=new Boolean(false);

async function insertionSort()
{
    const bar = document.querySelectorAll(".bar")
    for(let i = 1; i < bar.length; i++){
        if(hasPressedStop==true){
        return
        }

        let current_bar = bar[i].style.height;
        bar[i].style.background = "blue"
        let j=i-1;

        await delayFunction(delay)
        if(hasPressedStop==true){
        return;
        }

        while(j>=0&&(parseInt(bar[j].style.height)>parseInt(current_bar))){
            if(hasPressedStop==true) {
                return;
            }
            bar[j].style.background = "blue"
            bar[j+1].style.height=bar[j].style.height;
            j--;

            await delayFunction(delay)
            if(hasPressedStop==true) {
                return;
            }
            for(let k=i;k>=0;k--)
            bar[k].style.background = "green"
            
        }
        bar[j+1].style.height=current_bar;
        bar[i].style.background = "green"
    }
}

const insertionSortBtn= document.querySelector(".insertion")
insertionSortBtn.addEventListener("click",async ()=>{
    hasPressedStop=false;
    enableStopBtn();
    disableButton();
    disableSizeSlider();
    disableResetBtn();
    
    await insertionSort();
    if(hasPressedStop==true){
        enableResetBtn();
        disableStopBtn();
        disableSpeedSlider();
    }else{
        enableResetBtn();
        disableStopBtn();
        disableSpeedSlider();
    }
})