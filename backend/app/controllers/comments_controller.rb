class CommentsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    comments = Comment.where(post_id: params[:id])

    render json: comments
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    unless @comment.save
      render json: @comment.errors, status: :unprocessable_entity
    end
    render status: :created, location: @comment
  end

  # PATCH/PUT /comments/1
  def update
    unless @comment.update(comment_params)
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:description, :post_id, :user_id)
    end
end
