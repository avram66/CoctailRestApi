
export const elements = {
searchForm:document.querySelector('.searchc'),   
searchInput: document.querySelector('.form-control'),    
searchResList:document.querySelector('.content'),
Pagination: document.querySelector('.results__pages'),
Button:document.querySelector('.btn-inline'),
Heading:document.querySelector('.display-5'),
Vrsta:document.querySelector('.vrsta'),
Belo:document.querySelector('.btn-light'),    
Crno:document.querySelector('.btn-dark'),
Tip:document.querySelector('.vrsta col-lg-4 '),
Loader:document.querySelector('.citac'),
Select:document.getElementById('slct'),
likesList:document.querySelector('.likes__list'),
heart:document.querySelector('.recipe__love'),
love:document.querySelector('.loves'),
measures:document.querySelector('.measures'),
item:document.querySelector('.item'),
likesMenu:document.querySelector('.likes__field'),
//resPerPage:document.getElementById('resPerPage'),
arrow:document.querySelector('.fa-arrow-right ')    
};

export  const elementStrings = {
loader:'loader'    
    
    
};

export const clearLoader = () =>{
const loader  = document.querySelector(`.${elementStrings.loader}`)    
if(loader){
    
loader.parentElement.removeChild(loader);    
    
    
}    
    
    
};



export const RenderLoader = parent =>{
    
let loader = `<div id="circle">
  <div class="loader">
    <div class="loader">
        <div class="loader">
           <div class="loader">

           </div>
        </div>
    </div>
  </div>
</div>    `;

parent.insertAdjacentHTML('beforeend', loader);  
    
    
 }
