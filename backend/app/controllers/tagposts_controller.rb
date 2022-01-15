class TagpostsController < ApplicationController
  before_action :set_tagpost, only: [:update]

  # GET /tagposts
  def index
    @tagposts = Tagpost.all

    # render json: @tagposts
  end

  # GET /tagposts/1
  def show
    tagposts = Tagpost.where(post_id: params[:id])

    render json: tagposts
  end

  # POST /tagposts
  def create
    @tagpost = Tagpost.new(tagpost_params)

    if @tagpost.save
      render json: @tagpost, status: :created, location: @tagpost
    else
      render json: @tagpost.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tagposts/1
  def update
    if @tagpost.update(tagpost_params)
      render json: @tagpost
    else
      render json: @tagpost.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tagposts/1
  def destroy
    tagposts = Tagpost.where(post_id: params[:id])

    tagposts.delete_all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tagpost
      @tagpost = Tagpost.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tagpost_params
      params.permit(:post_id, :tag_id)
    end
end
