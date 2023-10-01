// 生成したURL
const recipeurl = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&categoryType=medium&applicationId=1022110364284411341';


const updateText = (data) => {
  //console.log(data.small[20]);
  for (let i = 0; i < data.medium.length; i++) {
      const insertHtml = `
          <li class="js-extraction">
            <a id ="recipeurl" href='/ingredient?categoryId=${data.medium[i].categoryId}&name=${data.medium[i].categoryName}&categoryUrl=${data.medium[i].categoryUrl}&parentCategoryId=${data.medium[i].parentCategoryId}' data-method="post">${data.medium[i].categoryName}</a>
          </li>
      `;
      $('#recipe_list').append(insertHtml);
  }
}

// API取得
$.getJSON(recipeurl, (data) => {
    const recipes = data.result;
    updateText(recipes);
});