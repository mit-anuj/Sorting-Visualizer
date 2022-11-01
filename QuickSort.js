let hasStopped= new Boolean(false)

async function QuickSort(start, end){
    let bar=document.querySelectorAll(".bar")
    let pivot=start;
    let p=start+1;
    let q=end;
    if(start+1==end){
        return
    }
    for(let i=start; i<=end; i++){
        if(bar[p].style.height<bar[pivot].style.height)
        {
            p++
        } 
        if(bar[q].style.height>bar[pivot].style.height)
        {
            q--
        }

        if((bar[p].style.height>bar[pivot].style.height)&&(bar[q].style.height<bar[pivot].style.height))
        {
            swap(bar[p],bar[q])
        }
    }
    
}