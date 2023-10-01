

window.onload = function(){
  var ele = document.getElementById('categoryId'); // HTML要素オブジェクトを取得
  var urljoin = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&categoryId='+ele.textContent +'&applicationId=1022110364284411341';
  //console.log(urljoin);

  // API取得
  $.getJSON(urljoin, (data) => {
    const recipes = data.result;
    updateText(recipes);
  });
}
  

const updateText = (data) => {
    for (let i = 0; i < data.length; i++) {
        const insertHtml = `
            <li class="ranking_li">
                <a href="${data[i].recipeUrl}" target="_blank">
                    <img src="${data[i].foodImageUrl}" alt="${data[i].recipeTitle} 画像">
                </a>
                <h2>${data[i].recipeTitle}</h2>
                <p>${data[i].recipeDescription}</p>
            </li>
        `;
        $('#recipe_ranking_list').append(insertHtml);
    }
}



