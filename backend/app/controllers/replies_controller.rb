class RepliesController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_reply, only: [:show, :update, :destroy]

  # GET /replies
  def index
    @replies = Reply.all

    render json: @replies
  end

  # GET /replies/1
  def show
    replies = Reply.where(comment_id: params[:id])

    render json: replies
  end

  # POST /replies
  def create
    @reply = Reply.new(reply_params)

    unless @reply.save
      render json: @reply.errors, status: :unprocessable_entity
    end
    
    render status: :created, location: @reply
  end

  # PATCH/PUT /replies/1
  def update
    unless @reply.update(reply_params)
      render json: @reply.errors, status: :unprocessable_entity
    end
    
  end

  # DELETE /replies/1
  def destroy
    @reply.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reply
      @reply = Reply.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reply_params
      params.permit(:description, :user_id, :comment_id)
    end
end
