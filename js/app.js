/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global variable
const navgationBar=document.querySelector("#navbar__list");
// section global variable
const  sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//Build the menu dynamically
function buildNavgation(){
    const container=document.createDocumentFragment();
    // looping over all sections 
    for(section of sections){
        const idSections=section.id;
        //console.log(idSections);
        const dataSections=section.dataset.nav;
        // create li element 
        const list=document.createElement('li');
        list.innerHTML=`<a class="menu__link" href="#${idSections}">${dataSections}</a>`;
        container.appendChild(list); 

    }
    //append all elements to the navigation
    navgationBar.appendChild(container);
    
}

buildNavgation();

// Add class 'active' to section when near top of viewport
// getting section bounding in view port
function checkSectionInView(section){
    return {top: Math.floor(section.getBoundingClientRect().top),
            bottom:  Math.floor(section.getBoundingClientRect().bottom),
            left:  Math.floor(section.getBoundingClientRect().left),
            right: Math.floor(section.getBoundingClientRect().right),
    } ;
    
    };
// remove the active class
  function removeActiveClass(section){
    section.classList.remove('your-active-class');

  };
// add the active class
  function addActiveClass(con,section){
      if(con){   
           section.classList.add('your-active-class');
    };
  };
// activation your active class acording to view port
  function activation(){
      sections.forEach((section)=>{
          const elemInView = checkSectionInView(section);
          //console.log(elemInView);
          //console.log(window.innerHeight);
          inView= () =>  (
            elemInView.top <=150 && elemInView.top>=-150 &&
            //elemInView.bottom <= 715 &&
            elemInView.left <= 16 &&
            elemInView.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
          removeActiveClass(section);
          addActiveClass(inView(),section)
      });
  };

window.addEventListener('scroll',activation);


// Scroll to anchor ID using scrollTO event

// scrolling use jquery cdn

 $('.navbar__menu a').on('click',function(event){
    if(this.hash !== ''){
        event.preventDefault()
        const hash=this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },800); 
    }
    //console.log(this.hash)
 });

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


