class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # # Returns the IP address of client as a +String+,
    # # usually set by the RemoteIp middleware.
    # def remote_ip
    #   @remote_ip ||= (get_header("action_dispatch.remote_ip") || ip).to_s
    #   render json: @remote_ip
    # end


  ##! this model is for finding the user's location via IP or location allowed
  def location_finder
    ## writing the method out
  end


  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end


   ##! here is where I'll contain the user authorization pre-checks
    ## move the user_authorization check to the Application Controller

    ## check the session[:user_id] and return only that user 
    ## that's the authorization
    ## then this goes down to every level beneath 

  private 
  
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { error: invalid.message }, status: :not_found
  end


end
