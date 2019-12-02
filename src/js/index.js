import Search from './modules/Search';
import * as searchViews from './views/SearchViews';
import  {elements,RenderLoader,clearLoader}  from './views/elements';
import * as Render  from './views/elements';
import axios from 'axios';
import Coctail from './modules/ID';
import Likes from  './modules/Likes';

import * as likesView from './views/LikesView';

const url = require('url');
//Objekat u koji idu podaci 
const object = {};

//Control Search potraznja podataka za odredjeni koktel 
const controlSearch = async () =>{
 var render;
    


//Clear hash before searching for Coctail    
window.location.hash = '' ;
//Clear Heading and  Results 
 
searchViews.ClearTotalResults();
searchViews.Clear();

 
//Get input from Search

const query = searchViews.getInput();
 
   
//window.location ='#'+ query;   
searchViews.clearInput();
  
//Potraznja podataka za odredjeni koktel
  
//searchViews.Clear();
try{    
if(query){
   
//Render Loader 
RenderLoader(elements.Loader);  

object.search = new Search(query);

await object.search.getResults();
//Clear Loader 
clearLoader();
//Display Results in the UI
    
searchViews.RenderResults(object.search.result);    
    
console.log(object.search.result);
//Display Total Results     
searchViews.DisplayLength(object.search.result);

searchViews.ClearButtons();
    
}
else if(!query){
    
 searchViews.NoResults();     
    
}    
}
catch(err) {
searchViews.NoResults();     
   
    
}


    
}


/*
elements.resPerPage.change(function() {
    location.reload();
});
*/
const RandomSearch = async()=>{
     //Get radnom Coctails
    

    //Render Loadader 
    searchViews.Clear();
     object.search = new Search();   
    //Call Random number of Coctails on Screen 
    RenderLoader(elements.Loader);  
    await object.search.getRandom();
    searchViews.RenderResults( object.search.random);
    await object.search.getRandom();
    searchViews.RenderResults( object.search.random);
    await object.search.getRandom();    
    searchViews.RenderResults( object.search.random);
    await object.search.getRandom();    
    searchViews.RenderResults( object.search.random);    
    await object.search.getRandom();    
    searchViews.RenderResults( object.search.random);    
    await object.search.getRandom();
    searchViews.RenderResults( object.search.random);    
    clearLoader();
    


}


//elements.resPerPage.change = controlSearch(); 

//Call of Control Search fucntion on submit event

elements.arrow.addEventListener('click',e=>{
if(elements.searchInput.value){   
e.preventDefault();

searchViews.ClearTotalResults();
//document.querySelector('.selector').style.display="block";    
controlSearch();
}
       
    
});

if(elements.searchForm){elements.searchForm.addEventListener('submit', e => {
e.preventDefault();
searchViews.ClearTotalResults();
//document.querySelector('.selector').style.display="block";    

   
controlSearch();
   
    
//Lock Res page 
});


 }



//Non Alcoholic Search Function async
const TypeSearchNon = async()=>{
searchViews.Clear();
searchViews.ClearTotalResults(); 
try{    
object.search = new Search(); 

  
await object.search.getTypeNon();


searchViews.RenderResults(object.search.NonAlcoholic);
//Display Length
searchViews.DisplayLength(object.search.NonAlcoholic);     

//If True
}
catch(err){
alert(err);    
}    

}
//Pagination For Non Alcoholic
if(elements.Pagination){elements.Pagination.addEventListener('click', e=>{



if(object.search.NonAlcoholic){
 //Target btn element      
const btn = e.target.closest('.btn-inline');
    
//Check if button true   
if(btn){

searchViews.Clear();
    
//Get Page number for Next display button  
const goToPage = parseInt(btn.dataset.goto, 10);
searchViews.Clear();
searchViews.RenderResults(object.search.NonAlcoholic,goToPage)

 
}
    
}
}); 
}

//Alcoholic Search Function
const TypeSearchAlc = async()=>{
searchViews.ClearTotalResults();    
searchViews.Clear();
RenderLoader(elements.Loader);
try{        
object.search = new Search(); 
await object.search.getTypeAlcoholic();
clearLoader();    

searchViews.RenderResults(object.search.Alcoholic);
searchViews.DisplayLength(object.search.Alcoholic);     
}
catch(er){
    
alert(er);    
    
}    

}

//Pagination for Alcoholic Type
if(elements.Pagination){elements.Pagination.addEventListener('click', e=>{
 //Target btn element  
if(object.search.Alcoholic){  
const btn = e.target.closest('.btn-inline');

//Check if button true   
if(btn){
    
searchViews.Clear();     
//Get Page number for Next display button 
 
const goToPage = parseInt(btn.dataset.goto, 10);
searchViews.Clear();
searchViews.RenderResults(object.search.Alcoholic,goToPage);

  
 
}
    
}
}); 

}
//Non Alcoholic Search
elements.Crno.addEventListener('click', e => {
        e.preventDefault();
          
       TypeSearchNon();
       

                 
            
});

//Alcoholic Search 
 elements.Belo.addEventListener('click', e => {
        e.preventDefault();
        //searchViews.Clear();      
        TypeSearchAlc();
       

                 
            
});

  
if(elements.Pagination){elements.Pagination.addEventListener('click', e=>{
 //Target btn element
   
if(object.search.result){    
const btn = e.target.closest('.btn-inline');
    
//Check if button true   
if(btn){
    
searchViews.Clear();     
//Get Page number for Next display button  
const goToPage = parseInt(btn.dataset.goto, 10);
searchViews.Clear();
    
searchViews.RenderResults(object.search.result,goToPage)
}
 
    
}

  
}); 
}


//CoctailView

const  controlCoctail = async () =>{
    
//Get id from the bar     

const id = window.location.hash.replace('#', '');

try{
    
if(id){
clearLoader();    
searchViews.Clear();
searchViews.ClearTotalResults();    
//Render Loader 
RenderLoader(elements.Loader);  
    
//Insert query into Search class
object.search = new Coctail(id);
//Get results 
await object.search.getID();
clearLoader();    

//var priti = object.search.drinkName;

console.log(object.search.coctail);

   
//Display on UI        
searchViews.RenderIngredients(object.search.coctail);
//Clear Buttons
searchViews.ClearButtons();    
}
}
catch(er){
    
alert(er);    
    
}    

}




//Event call function ControCoctail   

['hashchange','load'].forEach(event=>window.addEventListener(event , controlCoctail));

if (window.location.href=== 'http://localhost:8080/'){searchViews.RandomDisplayHeader();   RandomSearch();}

//window.r = new Coctail('Martini'); 

  

   

  



//Read Storage of likes array 
window.addEventListener('load', ()=>{
  

object.likes = new Likes();
  
object.likes.readStorage();
//Toggle like menu button
likesView.toggleLikeMenu(object.likes.getNumLikes());       
//Render likes 
object.likes.likes.forEach(like=>likesView.renderLike(like));
searchViews.Clear(); 
//Random Search
if (window.location.href=== 'http://localhost:8080/index.html'){ searchViews.RandomDisplayHeader(); RandomSearch();}




//controlCoctail();  
//state.list = new List();
//Restore List data 
//state.list.readData();
//Render items    


});


 



//Control Like Function add item to favorites

const controlLike = async() => {

   
    if (!object.likes) object.likes = new Likes();
    
    //const currentID = object.search.id;
    const currentID = object.search.id;
    
   

    //console.log(object.search.id)
    // User has NOT yet liked current recipe
    if (!object.likes.isLiked(currentID)) {
    
        const newLike = object.likes.addLike(
            currentID,
            object.search.drinkName,
            object.search.image,
            object.search.alcoholic
        );
    
    
        // Toggle the like button
          likesView.toggleLikeBtn(true);

        // Add like to UI list
         likesView.renderLike(newLike);
        //Toggle heart
        likesView.toggleLikeMenu(object.likes.getNumLikes()); 

    // User HAS liked current recipe
    } else {
        
        // Remove like from the state
        object.likes.deleteLike(currentID);

        // Toggle the like button
        likesView.toggleLikeBtn(false);
        
        // Remove like from UI list
        likesView.deleteLike(currentID);
        //Toggle heart
        likesView.toggleLikeMenu(object.likes.getNumLikes());       
    }
    
}
export const  Liking = ()=>{
const IdLiked = object.search.id;
const isLiked = object.likes.isLiked(IdLiked);
return isLiked;
} 







if(elements.searchResList){elements.searchResList.addEventListener('click', e=> {

if (e.target.matches('.recipe__love , .recipe__love * ')){
      
  controlLike();
    
}    
});
 }


//location.reload();    

                                        
window.r = object.Likes;                                       