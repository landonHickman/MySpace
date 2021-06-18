class Api::UsersController < ApplicationController
  before_action :authenticate_user!


  def index
    # render json: User.all
    render json: User.where.not(id: current_user.id)
  end

  def show
    # @user = User.find(params[:id])
    # render json: @user
    render json: current_user
  end

  def usersprofile
    render json: current_user
  end

  def create
    
  end

  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: current_user.errors
    end
  end

  def destroy
    render json: current_user.destroy
  end

  private

  

  def user_params
    params.require(:user).permit(:name, :email, :image, :password)
  end
end
