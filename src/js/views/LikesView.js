import { elements } from './elements';


export const toggleLikeBtn = isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
     document.querySelector('.recipe__love use').setAttribute('href', `./bootstrap/img/icons.svg#${iconString}`);
    
    
    // icons.svg#icon-heart-outlined
};
    

export const toggleLikeMenu = numLikes => {
    elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

export const renderLike = like => {
    const markup = `
        <li>
            <a class="likes__link" href="/#${like.id}">
                <figure class="likes__fig">
                    <img src="${like.img}" alt="${like.coctail}" width="80px">
                </figure>
                <div class="likes__data">
                    <p class="likes__name">${like.coctail}</p>
                <p class="likes__name">${(like.alcoholic)}</p>
                 
                </div>
            </a>
  
        </li>

    `;
    elements.likesList.insertAdjacentHTML('afterbegin', markup);
};

export const deleteLike = id => {
    const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
    if (el) el.parentElement.removeChild(el);
}