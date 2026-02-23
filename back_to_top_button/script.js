function backToTopButton(){
    return /*HTML*/`
    <div class="flex-colum">
        <button onclick="scrollToTop()" class="">
            <div class="">
                <span></span>
                <span></span>
            </div>
        </button>
    </div>
    `;
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}