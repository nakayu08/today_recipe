class TopController < ApplicationController
  def index
    @categoryName = params[:categoryName]
    @categoryId= params[:categoryId]
    @parentCategoryId= params[:parentCategoryId]
    @categoryUrl= params[:categoryUrl]
  end

  def show
    @categoryName = params[:categoryName]
    @categoryId= params[:categoryId]
    @parentCategoryId= params[:parentCategoryId]
    @categoryUrl= params[:categoryUrl]
  end

end
