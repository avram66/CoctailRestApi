import axios from 'axios';

//import Search from './modules/Search.js';
export default class Search{
constructor(query,id){
this.query=query;
this.id=id;    
   
    
    
}    

async  getResults(){
try{ 
const res = await axios(` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.query}`);

this.result= res.data.drinks;
}
 

catch(error){
    
alert(error);    
    
}    
}


async getRandom(){
    

const rnd = await axios(`https://www.thecocktaildb.com/api/json/v1/1/random.php`); 
this.random=rnd.data.drinks;    
   



    
    
}
async getTypeAlcoholic(){
    
const type =await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
this.Alcoholic= type.data.drinks;    
    
    
    
}
async getTypeNon(){
const type2 =await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`);
this.NonAlcoholic= type2.data.drinks;    
        
    
    
    
    
}    
    
}


    
    
    
    
