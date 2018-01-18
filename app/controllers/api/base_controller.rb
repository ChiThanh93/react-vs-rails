class Api::BaseController < ActionController::Base
  before_action :authenticate_user!

  rescue_from ::ActiveRecord::RecordNotFound, with: :record_not_found

  def response_success data = nil
    render json: {
      data: data,
      status: true,

    }
  end

  def response_fail data = nil, status_code = 200
    render json: {
      data: data,
      status: false,
    },
    status: status_code
  end

  def record_not_found

  end

end
