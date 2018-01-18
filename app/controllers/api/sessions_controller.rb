class Api::SessionsController < BaseController
  include Devise::Controllers::SignInOut
  prepend_before_filter :require_no_authentication, :only => [ :new, :create, :cancel ]


  def create
    binding.pry
  end

  def destroy
    binding.pry
  end


end
