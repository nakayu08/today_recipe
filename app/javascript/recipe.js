// 生成したURL
//const url = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1022110364284411341';
//const recipeurl = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&categoryType=small&elements=categoryName%2CcategoryUrl&applicationId=1022110364284411341';

const recipeurl = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&categoryType=medium&applicationId=1022110364284411341';


// 書き出し
//const updateText = (data) => {
  //  for (let i = 0; i < data.length; i++) {
    //    const insertHtml = `
      //      <li>
        //        <a href="${data[i].recipeUrl}" target="_blank">
          //          <img src="${data[i].foodImageUrl}" alt="${data[i].recipeTitle} 画像">
            //    </a>
              //  <h2>${data[i].recipeTitle}</h2>
                //<p>${data[i].recipeDescription}</p>
            //</li>
       // `;
       // $('#recipe_list').append(insertHtml);
   // }
//}
//<a id="recipeurl" href='${data.medium[i].categoryUrl}'>${data.medium[i].categoryName}</a>
//<%=link_to ${data.medium[i].categoryName},top_path(id:${data.medium[i].parentCategoryId+'-'+data.medium[i].categoryId} , categoryId:${data.medium[i].categoryId} ,categoryName:${data.medium[i].categoryName},categoryUrl:${data.medium[i].categoryUrl},parentCategoryId:${data.medium[i].parentCategoryId})%>
//<a id="recipeurl" href=top/${data.medium[i].categoryId} ,categoryId: ${data.medium[i].categoryId} ,categoryName: ${data.medium[i].categoryName},categoryUrl: ${data.medium[i].categoryUrl},parentCategoryId: ${data.medium[i].parentCategoryId}>${data.medium[i].categoryName}</a>
//<a id="recipeurl" href=top/${data.medium[i].categoryId}  :categoryId=> ${data.medium[i].categoryId} ,:categoryName=> ${data.medium[i].categoryName},:categoryUrl=> ${data.medium[i].categoryUrl},:parentCategoryId=> ${data.medium[i].parentCategoryId}</a>
//<%= link_to ${data.medium[i].categoryName}, ingredient_index_path(:categoryId=> ${data.medium[i].categoryId} ,:name=> ${data.medium[i].categoryName},:categoryUrl=> ${data.medium[i].categoryUrl},:parentCategoryId=> ${data.medium[i].parentCategoryId}), method: :post %>

const updateText = (data) => {
  //console.log(data.small[20]);
  for (let i = 0; i < 5; i++) {
      const insertHtml = `
          <li class="js-extraction">
            <a id ="recipeurl" href='/ingredient' data-method="post">${data.medium[i].categoryName}</a>
          </li>
      `;
      $('#recipe_list').append(insertHtml);
      console.log(insertHtml)
  }
}

// API取得
$.getJSON(recipeurl, (data) => {
    const recipes = data.result;
    updateText(recipes);
});