class UsersController < ApplicationController
  def index
    @user_msg = 'User data.'
    @user_data = User.all
  end
end
