export default class Likes{
constructor(){
this.likes = [];    
    
    
}    
    
addLike(id,coctail,img,alcoholic){
const like = {
id,
coctail,
img,
alcoholic    
    
};    
this.likes.push(like);
if(this.likes) 
//Persist data in local storage
this.persistData(); 
console.log(this.likes);    
return like;  
}    
deleteLike(id){
const index = this.likes.findIndex(el=>el.id===id);    

this.likes.splice(index,1);    
    
 //Persist data in local storage
this.persistData();    
    }
deleteAllLikes(){
this.likes.length=0;
this.storage.length = 0;    
return this.likes;    
    
    
    
}    
isLiked(id){
 return this.likes.findIndex(el=>el.id===id) !== -1; 
  
}
    
getNumLikes(){
return this.likes.length;    
    
 }   
//Persist data in local storage   
persistData() {
localStorage.setItem('likes',JSON.stringify(this.likes));    
    
    
}
readStorage(){
    
const storage = JSON.parse(localStorage.getItem('likes'));    
//Restoring likes from the local Storage
if(storage) this.likes = storage;    
}    
    
}