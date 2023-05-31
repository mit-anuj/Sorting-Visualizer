async function merge(ele, start, mid, end) {
    let n1 = mid - start + 1;
    let n2 = end - mid;
    let a1 = new Array(n1)
    let a2 = new Array(n2);

    for (let i = 0; i < n1; i++) {
        if (hasPressedStop == true) {
            return;
        }
        await delayFunction(delay);
        ele[start + i].style.background = 'orange'
        a1[i] = ele[start + i].style.height
        if (hasPressedStop == true) {
            return;
        }
    }
    for (let i = 0; i < n2; i++) {
        if (hasPressedStop == true) {
            return;
        }
        await delayFunction(delay);
        ele[mid + 1 + i].style.background = 'teal'
        a2[i] = ele[mid + i + 1].style.height
        if (hasPressedStop == true) {        
            return;
        }
    }
    await delayFunction(delay);
    let i = 0, j = 0, k = start;
    while (i < n1 && j < n2) {
        if (hasPressedStop == true) {
            return;
        }
        await delayFunction(delay);

        if (parseInt(a1[i]) <= parseInt(a2[j])) {
            if (hasPressedStop == true) {
                return;
            }

            if((n1+n2)==ele.length){
                ele[k].style.background = 'green'
            }
            else{
                ele[k].style.background = 'lightgreen'
            }

            if (hasPressedStop == true) {
                return;
            }
            ele[k].style.height = a1[i];
            k++;
            i++
        }
        else {
            if (hasPressedStop == true) {
                return;
            }
            if((n1+n2)==ele.length){
                ele[k].style.background = 'green'
            }
            else{
                ele[k].style.background = 'lightgreen'
            }
            await delayFunction(delay);
            ele[k].style.height = a2[j];
            k++;
            j++;
            if (hasPressedStop == true) {
                return;
            }
        }
    }
    while (i < n1) {
        if (hasPressedStop == true) {
            return;
        }
        await delayFunction(delay);
        if((n1+n2)==ele.length){
            ele[k].style.background = 'green'
        }
        else{
            ele[k].style.background = 'lightgreen'
        }
        if (hasPressedStop == true) {
            return;
        }
        ele[k].style.height = a1[i];
        i++;
        k++
    }
    while (j < n2) {
        if (hasPressedStop == true) {
            return;
        }
        await delayFunction(delay);
        if((n1+n2)==ele.length){
            ele[k].style.background = 'green'
        }
        else{
            ele[k].style.background = 'lightgreen'
        }
        if (hasPressedStop == true) {
            return;
        }
        ele[k].style.height = a2[j];
        j++;
        k++
    }
}

async function mergeSort(ele, start, end) {
    if (start >= end) {
        return;
    }
    let m = start + Math.floor((end - start) / 2);
    await mergeSort(ele, start, m)
    await mergeSort(ele, m + 1, end);
    await merge(ele, start, m, end)
}


let mergebtn = document.querySelector('.merge');
mergebtn.addEventListener('click', async () => {
    hasPressedStop = false;
    disableButton()
    disableSizeSlider()
    disableResetBtn()
    enableStopBtn()
    let bar = document.querySelectorAll('.bar');
    let start = 0;
    let end = bar.length - 1;
    await mergeSort(bar, start, end);
    if (hasPressedStop == true) {
        enableResetBtn()
        disableStopBtn()
        disableSpeedSlider()
    } else {
        enableSizeSlider();
        enableButton();

    }
    disableStopBtn();
    enableResetBtn();
})
