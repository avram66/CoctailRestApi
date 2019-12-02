import  {elements}  from './elements';
import Search from '../modules/Search';
import Coctail from '../modules/ID';
import {toggleLikeBtn,iconString} from './LikesView';
import * as index from '../index';
import { isBoolean } from 'util';



export  const getInput = () =>  elements.searchInput.value;
//Clear Search View
//Clear Search Views 
export  const Clear = () =>  {
elements.searchResList.innerHTML = '';
elements.Pagination.innerHTML = '';
                      
}



//Limit Coctail title 
export const limitCoctailTitle =(title,limit = 24) =>{

    const newTitle = [];    
    
     if(title.length > limit){    
   
         title.split(' ').reduce((acc,cur)=>{
        
       if(acc+cur.length<=limit){ 
    
    newTitle.push(cur);    
    
}
return acc + cur.length;    
},0);    
return `${newTitle.join(' ')}...`    
}
return title;    
}





//Clear Heading of Total Results

export const ClearTotalResults = () => elements.Heading.innerHTML = '';

export const ClearButtons = () => elements.Vrsta.innerHTML = '';

//export const ClearRandom = ()=>document.querySelector('.random-coctails').innerHTML='';

export const NoResults = () =>{
const markup = `<h1 class="display-4"> We couldnt find any results</h1>`;

elements.searchResList.insertAdjacentHTML('beforeend', markup);

}
export const RandomDisplayHeader = () =>{
    const markup = `<b>Random Coctails</b>`;
    
    elements.Heading.insertAdjacentHTML('beforeend', markup);
    
    }


                             


//Clear Input
export const clearInput = () =>elements.searchInput.value = '';


//Display Picures
export const Images = img=>{
const img_markup = `

          <img src="https://www.thecocktaildb.com/images/ingredients/${
img +`.png`}"   class="enlarge" alt="imgCoctail"/>




`; 

 elements.searchResList.insertAdjacentHTML('afterbegin', img_markup);     
}


//Display Length
export const DisplayLength = (drinks)=> 
elements.Heading.insertAdjacentHTML('afterbegin',`Total Number of Results <b> ${drinks.length} </b>`);                                
 
export const RenderIngredient = (ingredient,Liking) =>{
//Hide Results per page     
//document.querySelector('.selector').style.display = "none";    
//Get ingredient values     
let values= Object.values(ingredient);
//Display picture foreach ingredient   
values.slice(21,34).reverse().filter(Boolean).forEach(el=>Images(el));
  


    
//Smanjiti foreach petljom ne treba ovaj array

let  measureIngredients =[ingredient.strMeasure1+ ingredient.strIngredient1,ingredient.strMeasure2+ingredient.strIngredient2,ingredient.strMeasure3+ingredient.strIngredient3,ingredient.strMeasure4+ ingredient.strIngredient4,
ingredient.strMeasure5+ingredient.strIngredient5,ingredient.strMeasure6+ingredient.strIngredient6,ingredient.strMeasure7+ingredient.strIngredient7,ingredient.strMeasure8+ ingredient.strIngredient8,ingredient.strMeasure9+ingredient.strIngredient9,ingredient.strMeasure10+ingredient.strIngredient10,ingredient.strMeasure11+ ingredient.strIngredient11,ingredient.strMeasure12+ingredient.strIngredient12,ingredient.strMeasure13+ingredient.strIngredient13,ingredient.strMeasure14+ingredient.strIngredient14,ingredient.strMeasure15+ ingredient.strIngredient15];
    
    
let measures =  values.slice(23,42);
    
//let measures =  values.slice(30,42).filter(Boolean);

   
//measureIngredients.filter(Boolean).join('   <br>  ')    
function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
  }
    
const markup2 =
      
`
 <button class="recipe__love" >
                    <svg class="header__likes"  >
                        <use href="./bootstrap/img/icons.svg#icon-heart${index.Liking() ? '' :'-outlined' }" ></use>
                    </svg>
                </button>


<h1 class="display-5 text-center" style="margin-bottom:5%;">
   ${ingredient.strDrink}
</h1>

<div class="text-center">
 <img src=${ ingredient.strDrinkThumb}  class="img-thumbnail "  width=400px; alt=${ ingredient.strDrinkThumb}/>
</div>

<p>
<div class ="specification">
<h1>Ingredients:</h1>
<h3><b>${values.slice(29,34).filter(Boolean).join(' , ') }</b></h3>


</p>

<blockquote class="blockquote">
<p class="mb-0">
   Instructions: ${ingredient.strInstructions}
</p>
</blockquote>
<h1 class="display-5 text-center" style="margin-bottom:5%">Glass type: ${ingredient.strGlass}</h1>
<h1>Measure:</h1>


<p>

</p>
<b>
<p class="measure">
${measureIngredients.filter(isEligible).join('<br>') }

</p>
</b>
</div> `;
        
elements.searchResList.insertAdjacentHTML('afterbegin', markup2);
   

    
/*var item =measures.filter(Boolean).forEach(el=>{document.querySelector('.measuress').insertAdjacentHTML('afterbegin',el)});  
    
/*values.slice(19,34).reverse().filter(Boolean).forEach=(el,item)=>{
    if (el!==null){
    document.querySelector('.measuress').insertAdjacentHTML('afterbegin',item+el)}};
*/
/*values.slice(19,34).forEach(el=>document.querySelector('.measuress').insertAdjacentHTML('beforeend',el))   */
    
    


};



 //measureIngredients.filter(Boolean).map(el=>(el))

    

export const RenderIngredients = (results) =>{

if(results) results.forEach(RenderIngredient);    

    
}


export const RenderCoctail = async (coctail) =>  {
//Makde global object     
let global = {};
   
//Render types properties based od element id foreach object    
global.object = new Coctail(coctail.idDrink);
//Call function    
await global.object.getID();
 
let type = global.object.coctail;

   

 //Get Results   
 type.map(el=>console.log(el.strDrink)) 

const markup = 
      
      
  `
 
<div class="grid">
<figure class="effect-julia">

						
                       <img src=${coctail.strDrinkThumb} alt=${coctail.strDrink===undefined?  limitCoctailTitle(el.strDrink) :limitCoctailTitle(coctail.strDrink)}/>
                      <a class="results__link" href="/#${coctail.idDrink}" target="_blank"  ></>
						<figcaption>
                         	 
							<h2><span>${coctail.strDrink===undefined?  limitCoctailTitle(el.strDrink) :limitCoctailTitle(coctail.strDrink)}</span></h2>
                                 <div>
								<p>${coctail.strGlass===undefined? type.map(el=>el.strGlass): 'Glass '+ coctail.strGlass}</p>
								<p>Alcholic:${coctail.strAlcoholic===undefined?type.map(el=>el.strAlcoholic):coctail.strAlcoholic}</p>
								<p>Category: ${coctail.strCategory===undefined?type.map(el=>el.strCategory):coctail.strCategory} </p>
							</div>
						
 
						</figcaption>
 
					</figure>
</div>



			
				` 

      
      

      
      
 elements.searchResList.insertAdjacentHTML('afterbegin', markup);
}









const createButton = (page , type)=>

 `


<button class="btn-inline results__btn--${type} glyphicon glyphicon-chevron-right" data-goto=${type==='prev'?page -1 :page +1}>
                    <span><b>Page${type==='prev'?page -1 :page +1}</b></span> <svg class="search__icon">
                        <use href="bootstrap/img/icons.svg#icon-triangle-${type==='prev'?'left': 'right'}"></use>
                    </svg>
                   
                </button>



`;




const renderButtons = (page,numResults,resPerPage)=>{
 
const pages = Math.ceil(numResults/resPerPage);
let button;    
if(page === 1 &&pages>1){
//document.querySelector('.selector').style.display="block";   
 button = createButton(page,'next');
   
}else if(page<pages){
    //Disable resPerPage if on page 2 
//document.querySelector('.selector').style.display = "none";  
   button =`
   ${createButton(page,'prev')}

   ${createButton(page,'next')}
   
   
`;

    
}

else if(page === pages&&pages>1){
    
//document.querySelector('.selector').style.display = "none";    
    
    
button = createButton(page,'prev');
        
    }else{
        
    button = '';        
        
        
    }    
    
elements.Pagination.insertAdjacentHTML('afterbegin',button);    
}


export const RenderResults = (drinks,page=1,resPerPage=12)  =>{

const start = (page-1)*resPerPage;
const end =page*resPerPage;
if(drinks){
 
drinks.slice(start,end).forEach(RenderCoctail);
//Check for render null if render null means its a Random Coctail call 
renderButtons(page,drinks.length,resPerPage);

//render==='none'?null:

}
   
    
};
