class ChatroomController < ApplicationController
  def index
    @messages = Message.includes(:user).order(created_at: :asc).limit(50)
  end
end