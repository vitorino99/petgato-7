class PostsController < ApplicationController
  before_action :check_admin, only: [:create, :update, :destroy]
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    if params[:sort]
      @posts = Post.order(params[:sort] + " DESC")
    elsif params[:q]
      @q = Post.ransack(params[:q])
      @posts = @q.result.to_a.uniq
    end

  end

  # GET /posts/1
  def show
    # render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    unless @post.save
      render json: @post.errors, status: :unprocessable_entity
    end

    render status: :created, location: @post
  end

  # PATCH/PUT /posts/1
  def update
    unless @post.update(post_params)
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:name, :content, :views, :banner_image)

    end
end
