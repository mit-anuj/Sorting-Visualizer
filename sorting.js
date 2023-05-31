// This function is to disable all the buttons
function disableButton(){
  document.querySelector(".merge").disabled=true
  document.querySelector(".bubble").disabled=true
  document.querySelector(".insertion").disabled=true
  document.querySelector(".quick").disabled=true
  document.querySelector(".count").disabled=true
  document.querySelector(".selection").disabled=true
}
// This function is to enable all the buttons
function enableButton(){
  document.querySelector(".merge").disabled=false
  document.querySelector(".bubble").disabled=false
  document.querySelector(".insertion").disabled=false
  document.querySelector(".quick").disabled=false
  document.querySelector(".count").disabled=false
  document.querySelector(".selection").disabled=false
}
// This function is to disable the Speed Slider input
function disableSpeedSlider()
{
  document.querySelector("#mySpeed").disabled=true;
}
// This function is to enable the Speed Slider input
function enableSpeedSlider()
{
  document.querySelector("#mySpeed").disabled=false;
}
// This function is to disable the Size Slider input
function disableSizeSlider()
{
  document.querySelector("#myRange").disabled=true;
}
// This function is to disable the Size Slider input
function enableSizeSlider()
{
  document.querySelector("#myRange").disabled=false;
}
// this function will enable stop button
function enableStopBtn()
{
  document.querySelector(".stop").disabled=false;
}
// this function will disable start button
function disableStopBtn()
{
  document.querySelector(".stop").disabled=true;
}
// this function will enable reset button
function enableResetBtn()
{
  document.querySelector(".reset").disabled=false;
}
// this function will disable reset button
function disableResetBtn()
{
  document.querySelector(".reset").disabled=true;
}

// this function will swap the bar
function swap(el1,el2)
{
  let temp=el1.style.height;
  el1.style.height=el2.style.height;
  el2.style.height=temp;
}


let arraySize= document.querySelector("#myRange")
// this function will take input form size silder and pass that value to the createNewArray function as a parameter.
arraySize.addEventListener('input',() =>{
  createNewArray(parseInt(arraySize.value))
})
//this function will provide the delay in sorting.
function delayFunction(milisec){
  return new Promise(resolve=>{//created a new user defined promise.
    setTimeout(()=>{ resolve('')},milisec);
  })
}
let barArray=[];
// this will call the createNewArray function so that when we load the page we wont get a blank page.
createNewArray();

function createNewArray(noOfBars=60)
{
  deleteBars();
  barArray=[]
  // this will generate the random numbers for the bars
  for(let i=0;i<noOfBars;i++)
  {
    barArray.push(Math.floor(Math.random()*251));
    // barArray[i]=Math.floor(Math.random()*251)
    // console.log(barArray[i])
    // barArray.push(barArray[i]);
  }
  // this will create bars
  const bars=document.querySelector("#sorting")
  for(let i=0;i<noOfBars;i++)
  {
    const bar=document.createElement('div')//this will create a new div with the given name.
    bar.style.height=`${barArray[i]*2}px`//this will give the bar its height.
    bar.classList.add('bar')// this will add class to the bar
    bar.classList.add('flex-item')// this will add class to the bar
    bar.classList.add(`barNumber${i}`)// this will add class to the bar
    bars.appendChild(bar)//this will append bar to the bars div.
  }
  
}
// default value for the delay.
let delay=260

let delayElement=document.querySelector("#mySpeed")

delayElement.addEventListener('input', function () {
  delay = 320-parseInt(delayElement.value)
})
// this will delete the all previous bars
function deleteBars()
{
  let bar=document.querySelector("#sorting")
  bar.innerHTML=""
}

let reset= document.querySelector(".reset")

reset.addEventListener("click", function()
{ 
  hasPressedStop = false
  enableSizeSlider();
  enableSpeedSlider()
  createNewArray();
  enableButton();

})
let stop= document.querySelector(".stop")
// this eventListener will stop the sorting
stop.addEventListener("click", ()=>{
  console.log("stop")
  hasPressedStop=true
  disableStopBtn()
  disableSpeedSlider()
  enableResetBtn()
})
