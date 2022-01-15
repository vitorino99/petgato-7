class ApplicationController < ActionController::API
    
    # GET /*a
    def not_found
        render json: { error: 'not_found' }
    end
    
    def authorize_request
        header = request.headers['Authorization']
        header = header.split(' ').last if header
        begin
            @decoded = JsonWebToken.decode(header)
            @current_user = User.find(@decoded[:user_id])
        rescue ActiveRecord::RecordNotFound => e
            # render json: { error: 'erro a' }, status: :unauthorized
            render json: { errors: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
            # render json: { error: 'erro b' }, status: :unauthorized
            render json: { errors: e.message }, status: :unauthorized
        end
    end

    def check_admin
        authorize_request
        if !@current_user.is_admin
            render json: "Unauthorized function", status: :unauthorized
        end
    end
end
