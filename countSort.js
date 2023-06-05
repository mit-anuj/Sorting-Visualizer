async function countSort() {
    const bars = document.querySelectorAll(".bar");
    let newArr = new Array(500);
    let sorted = new Array(60);
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = 0;
    }
    for (let i = 0; i < bars.length; i++) {
        if (hasPressedStop == true) {
            return;
        }
        bars[i].style.background = 'skyblue';
        await delayFunction(delay);
        let lastIndex = bars[i].style.height.lastIndexOf('p');
        let height = bars[i].style.height.slice(0, lastIndex);
        newArr[height] = newArr[height] + 1;
        bars[i].style.background = '#9a031e';
    }
    for (let i = 1; i < newArr.length; i++) {
        if (hasPressedStop == true) {
            return;
        }
        newArr[i] = newArr[i] + newArr[i - 1];
    }
    for (let i = bars.length - 1; i >=0; i--) {
        if (hasPressedStop == true) {
            return;
        }
        lastIndex = bars[i].style.height.lastIndexOf('p');
        height = bars[i].style.height.slice(0, lastIndex);
        sorted[newArr[height]] = height;
        newArr[height]--;
    }
    for (let i = 0; i < bars.length; i++) {
        if (hasPressedStop == true) {
            return;
        }
        // console.log(sorted[i])
        bars[i].style.background = 'blue';
        await delayFunction(delay)
        bars[i].style.height = sorted[i+1] + 'px';
        bars[i].style.background = 'green';
    }

}

let count = document.querySelector(".count");
count.addEventListener('click', async () => {
    hasPressedStop = false;
    disableButton();
    disableSizeSlider();
    enableStopBtn();
    disableResetBtn();
    await countSort();
    if (hasPressedStop == true) {
        disableStopBtn();
        enableResetBtn();
    }
    disableStopBtn();
    enableResetBtn();
})