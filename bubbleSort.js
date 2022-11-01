let hasPressedStop= new Boolean(false);

async function bubbleSort()
{
    const bar=document.querySelectorAll(".bar")
    for(let i=0;i<bar.length-1;i++)
    {
        for(let j=0;j<bar.length-i-1;j++){
            if(hasPressedStop==true)
                return;

            bar[j].style.background='#0f4c5c'
            bar[j+1].style.background='#0f4c5c'
            if(parseInt(bar[j].style.height)>parseInt(bar[j+1].style.height))
            {
                await delayFunction(delay)
                swap(bar[j],bar[j+1])
            }
            bar[j].style.background="#9a031e"
            bar[j+1].style.background="#9a031e"
        }
        bar[bar.length-1-i].style.background="#005f73"
    }
    bar[0].style.background="#005f73"
}

const button= document.querySelector('.bubble')

button.addEventListener('click', async () => {
    hasPressedStop=false
    disableButton();
    enableStopBtn()
    disableResetBtn()
    disableSizeSlider();
    await bubbleSort();
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableResetBtn();
        disableStopBtn();
        disableSpeedSlider();
    }  
})
