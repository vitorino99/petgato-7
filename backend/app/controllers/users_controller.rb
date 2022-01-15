class UsersController < ApplicationController
  before_action :authorize_request, only: [:show, :update]
  before_action :check_admin, only: [:index, :destroy]
  # before_action :set_user, only: [:show, :update, :destroy]
  before_action :find_user, except: [:create, :index]
  
  # GET /users
  def index
    @users = User.all
    # render json: users, status: :ok
  end

  # GET /users/{id}
  def show
    # render json: @user, status: :ok
  end

  # POST /users
  def create
    @user = User.new(user_params)
    
    unless @user.save
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
    # render json: @user, status: :created
  end
  
  # PUT /users/{username}
  def update
    unless @user.update(user_params)
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    # render status: :ok
  end

  def update
    # render json: @user, status: :ok
    unless @user.update(user_params)
      render status: :bad_request
    end
  end

  private
  
  def find_user
    @user = User.find_by!(id:params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'User not found' }, status: :not_found
  end

  def user_params
    params.permit(:name, :email, :password, :is_admin, :photo, :password_confirmation)
  end

end
