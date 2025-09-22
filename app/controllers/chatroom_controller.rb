class ChatroomController < ApplicationController
  before_action :require_user
  def index
    @messages = Message.includes(:user).order(created_at: :asc).limit(50)
  end
end