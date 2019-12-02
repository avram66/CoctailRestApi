import axios from 'axios';


export  default class Coctail{
constructor(id){
this.id=id;
  
    
    
}
    
async getID(){
try{
const name = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`);    
this.coctail = name.data.drinks;
this.drinkName =name.data.drinks[0].strDrink;
this.image = name.data.drinks[0].strDrinkThumb;
this.alcoholic = name.data.drinks[0].strAlcoholic;    
    }
catch(error){
    
 alert(error);   
    
}    
    
    
}    
    
    
    
}