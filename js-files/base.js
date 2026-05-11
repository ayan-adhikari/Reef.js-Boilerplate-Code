//This js file handles important stuff that are usually used
//Variables
let mode = 'light';
const root = document.documentElement; //Assigning root element to root variable
window.addEventListener(`load`, loadPage)
function loadPage()
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
    //Hide main loading screen and wrapper
    data.loaderDisplay = `hidden` 
    //Show main page
    data.contentDisplay = ``
    //Remove white-bg class from body
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
  //Set light mode colour scheme
  if (targetMode == `light`)
  {
    //Changing each variable
    root.style.setProperty(`--main`, `transparent`);
    root.style.setProperty(`--secondary`, `transparent`);
    root.style.setProperty(`--accent-1`, `transparent`);
    root.style.setProperty(`--accent-2`, `transparent`);
    root.style.setProperty(`--text`, `black`);
  } 
  //Set dark mode colour scheme
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

