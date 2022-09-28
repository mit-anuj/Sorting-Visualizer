// This function is to disable all the buttons
function disableButton(){
  document.querySelector(".merge").disabled=true
  document.querySelector(".bubble").disabled=true
  document.querySelector(".insertion").disabled=true
  document.querySelector(".quick").disabled=true
  document.querySelector(".count").disabled=true
  document.querySelector(".radix").disabled=true
  document.querySelector(".selection").disabled=true
}
// This function is to enable all the buttons
function enableButton(){
  document.querySelector(".merge").disabled=false
  document.querySelector(".bubble").disabled=false
  document.querySelector(".insertion").disabled=false
  document.querySelector(".quick").disabled=false
  document.querySelector(".count").disabled=false
  document.querySelector(".radix").disabled=false
  document.querySelector(".selection").disabled=false
}
// This function is to disable the Speed Slider input
function disableSpeedSlider()
{
  document.querySelector("#myRange").disabled=true;
}
// This function is to enable the Speed Slider input
function enableSpeedSlider()
{
  document.querySelector("#myRange").disabled=false;
}
// This function is to disable the Size Slider input
function disableSizeSlider()
{
  document.querySelector("#mySpeed").disabled=true;
}
// This function is to disable the Size Slider input
function enableSizeSlider()
{
  document.querySelector("#mySpeed").disabled=false;
}

function enableStartBtn()
{
  document.querySelector(".start").disabled=false;
}
function disableStartBtn()
{
  document.querySelector(".start").disabled=true;
}function enableResetBtn()
{
  document.querySelector(".reset").disabled=false;
}function disableResetBtn()
{
  document.querySelector(".reset").disabled=true;
}
// this function will swap the bar
function swap(el1,el2)
{
  let temp=el1;
  el1=el2;
  el2=temp;
}


let arraySize= document.querySelector("#myRange")

arraySize.addEventListener('input',() =>{
  createNewArray(parseInt(arraySize.value))
})


let barArray=[];
// this will call the createNewArray function so that when we load the page we wont get a blank page.
createNewArray();

function createNewArray(noOfBars=60)
{
  // this will generate the random numbers for the bars
  for(let i=0;i<noOfBars;i++)
  {
    let randomNum=Math.floor(Math.random()*251)
    console.log(randomNum)
    barArray.push(randomNum);
  }
  
  // this will create bars
  const bars=document.querySelector("#sorting")
  for(let i=0;i<noOfBars;i++)
  {
    const bar=document.createElement('div')
    bar.style.height=`${barArray[i]*2}px`
    bar.classList.add('bar')
    bar.classList.add('flex-item')
    bar.classList.add(`barNumber${i}`)
    bars.appendChild(bar)
  }
  
}
let delay=260


// this will delete the all previous bars
function deleteBars()
{
  let bar=document.querySelector("#sorting")
  bar.innerHTML=""
}

