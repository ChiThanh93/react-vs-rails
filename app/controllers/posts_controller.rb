class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @post = Post.all
    render json: @post
  end

  def create
    post = Post.create! post_params
  end

  private
  def post_params
    params.require(:post).permit :name, :discription
  end
end
