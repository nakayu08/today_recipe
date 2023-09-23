function search (){
  var $searchInput = document.getElementById("search-text"); // 入力エリア
  const targetText=document.getElementById("recipe_list")
  const $searchElem = targetText.getElementsByTagName('li');

  // 絞り込み処理
  $searchInput.addEventListener("keyup", () => {
    if ($searchInput != '') {
      var keywordArr = $searchInput.value

      for (var i = 0; i < $searchElem.length; i++) {
        $searchElem[i].style.display ="block"; // 現在非表示にしているリストを表示する

        var thisString = $searchElem[i].textContent.toString();
        if(thisString.indexOf(keywordArr) == -1) { // 入力文字列と一致する文字列がない場合
          $searchElem[i].style.display ="none"
        }
      }
    }
  });
};

window.addEventListener('load', search);
