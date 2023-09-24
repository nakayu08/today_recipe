function search (){
  var $searchInput = document.getElementById("search-text"); // 入力エリア
  const targetText=document.getElementById("recipe_list")
  const $searchElem = targetText.getElementsByTagName('li');

  // 絞り込み処理
  $searchInput.addEventListener("keyup", () => {
    if ($searchInput != '') {
      var keywordArr = $searchInput.value

      var keywordkanaAr;
      var keywordhiraAr;
      
      keywordkanaAr = hiraToKana(keywordArr); //カタカナへの変換
      keywordhiraAr = kanaToHira(keywordArr); //ひらがなへの変換
      

     //console.log(keywordArr)
     //console.log(keywordkanaAr)
     //console.log(keywordhiraAr)

      for (var i = 0; i < $searchElem.length; i++) {
        $searchElem[i].style.display =""; // 現在非表示にしているリストを表示する

        var thisString = $searchElem[i].textContent.toString();
        if(thisString.indexOf(keywordkanaAr) == -1 && thisString.indexOf(keywordhiraAr)== -1) { // 入力文字列と一致する文字列がない場合
          $searchElem[i].style.display ="none"
        }
      }
    }
  });
};

window.addEventListener('load', search);

function kanaToHira(str) {
  return str.replace(/[\u30a1-\u30f6]/g, function(match) {
      var chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
  });
}

function hiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
      var chr = match.charCodeAt(0) + 0x60;
      return String.fromCharCode(chr);
  });
}