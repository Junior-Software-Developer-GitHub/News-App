var applyBtn = document.querySelector(".filterBtn_js");
applyBtn.addEventListener("click", filteredArticlesHeader);

function filteredArticlesHeader(length) {
   if(length > 0){
       var header = document.querySelector(".headerFilteredArticles"); 
       header.classList.add('active');
   }
}

function checkFields(){
    var title = document.querySelector(".inputTitle"); 
    var subtitle = document.querySelector(".inputSubtitle"); 
    var content = document.querySelector(".inputContent"); 
    var createdDate = document.querySelector(".inputCreatedDate"); 
    var publishedDate = document.querySelector(".inputPublishedDate"); 
    console.log(createdDate.value);
    if(title.value === "" || subtitle.value===""||content.value===""||createdDate.value===""||publishedDate.value===""){
        alert("Fill each field!")
        return false;
    }
    alert("Article is successfully edited!")

return true;

}
function AreYouSureJS(){
    if (confirm('Are you sure you want to delete this article?')) return true;
    else  return false;
}