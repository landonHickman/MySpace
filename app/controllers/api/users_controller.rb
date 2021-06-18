class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  def usersprofile
    render json: @user
  end

  def create
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors
    end
  end

  def destroy
    render json: @user.destroy
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :image, :password)
  end
end
