//This js file handles important stuff that are usually used
//Variables
let mode = 'light';
const root = document.documentElement; //Assigning root element to root variable
window.addEventListener(`load`, pageLoaded)
function pageLoaded()
{
  //Arrow function for setting up stuff for light and dark mode
  setTimeout(() => {
    if (localStorage)
    {
        mode = localStorage.getItem("mode") || 'light';
        if (mode == 'light')
        {
          setMode(`light`) 
        }
        else if (mode == 'dark')
        {
          setMode(`dark`)
        }
    }
    else
    {
      mode = 'light'
      setMode(`light`)
    }
  }, 1);
  //Arrow function for changing from loading screen to regular screen
  setTimeout(() => {
    console.log(`Page loaded`)
    //Hide main loading screen and wrapper
    document.getElementById("loading-screen").classList.add("hidden")
    document.getElementById("loader-wrapper").classList.add("hidden")
    //Remove flexbox so they dont take up space
    document.getElementById("loading-screen").classList.remove("flexbox")
    document.getElementById("loader-wrapper").classList.remove("flexbox")
    document.getElementById("outer-loader").classList.remove("flexbox")
    document.getElementById("middle-loader").classList.remove("flexbox")
    document.getElementById("inner-loader").classList.remove("flexbox")
    //Show main page
    document.getElementById("page-content").classList.remove("hidden")
    //Remove whit-bg class from body
    document.getElementById(`body`).classList.remove(`white-bg`)
  }, 1); /*This is the delay which can be increased for testing and is 1ms by default*/
}
//Function for setting light/dark mode (triggered by an event listener in script.js)
function toggleMode()
{
  if (mode == 'light')
  {
    setMode(`dark`)
    mode = 'dark'
  }
  else if (mode == 'dark')
  {
    setMode(`light`) 
    mode = 'light'
  }
  localStorage.setItem('mode', mode);
}
function setMode(targetMode)
{
  if (targetMode == `light`)
  {
    //Changing each variable
    root.style.setProperty(`--main`, `transparent`);
    root.style.setProperty(`--secondary`, `transparent`);
    root.style.setProperty(`--accent-1`, `transparent`);
    root.style.setProperty(`--accent-2`, `transparent`);
    root.style.setProperty(`--text`, `black`);
  } 
  else if (targetMode == `dark`)
  {
    //Changing each variable
    root.style.setProperty(`--main`, `transparent`);
    root.style.setProperty(`--secondary`, `transparent`);
    root.style.setProperty(`--accent-1`, `transparent`);
    root.style.setProperty(`--accent-2`, `transparent`);
    root.style.setProperty(`--text`, `black`);
  }
}
//Function for generating numbers between min to max (including min and max)
function generateRandomNumber(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

