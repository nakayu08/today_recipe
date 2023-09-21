function search (){
  const searchText  = document.getElementById("search-text");
  searchText.addEventListener("keyup", () => {
    console.log(searchText.value);
  });
};

window.addEventListener('load', search);
