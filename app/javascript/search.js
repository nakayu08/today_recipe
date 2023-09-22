function search (){
  const searchText  = document.getElementById("search-text");
  var targetText=[];

  searchText.addEventListener("keyup", () => {
    //console.log(searchText.value);
    var searchResult;
 
    // 検索結果を格納するための配列を用意
    searchResult = [];
  
    // 検索結果エリアの表示を空にする
    $('#search-result__list').empty();

    // 検索ボックスに値が入ってる場合
    if (searchText != '') {
        if (targetText.indexOf(searchText) != -1) {
          // 存在する場合はそのリストのテキストを用意した配列に格納
          searchResult.push(targetText);
        }
      }
      // 検索結果をページに出力
      for (var i = 0; i < searchResult.length; i ++) {
        $('<span>').text(searchResult[i]).appendTo('#search-result__list');
      }
    });
};

  const recipeurl = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&categoryType=small&elements=categoryName%2CcategoryUrl&applicationId=1022110364284411341';
  $.getJSON(recipeurl, (data) => {
    const recipes = data.result;
    updateText(recipes);
  });
  const updateText = (data) => {
    for (let i = 0; i < data.small.length; i++) {
      //console(data.small[i].categoryName)
      targetText.push(data.small[i].categoryName);
    }
  }

window.addEventListener('load', search);
