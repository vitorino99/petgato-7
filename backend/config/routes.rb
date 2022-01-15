Rails.application.routes.draw do

  resources :contacts, :defaults => { :format => 'json' }
  resources :reports, :defaults => { :format => 'json' }
  resources :replies, :defaults => { :format => 'json' }
  resources :comments, :defaults => { :format => 'json' }
  resources :likes, :defaults => { :format => 'json' }
  resources :tagposts, :defaults => { :format => 'json' }
  resources :posts, :defaults => { :format => 'json' }
  resources :tags, :defaults => { :format => 'json' }
  resources :users, :defaults => { :format => 'json' }

  
  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # post '/users', to: 'users#create'
  # delete '/users/:id',  to: 'users#destroy'
  # put '/users/:id', to: 'users#update'
  # patch '/users/:id', to: 'users#update'

  post '/auth/login', to: 'authentication#login'
  post '/password/forgot', to: 'passwords#forgot', :defaults => { :format => 'json' }
  post '/password/reset', to: 'passwords#reset'


  # get '/*a', to: 'application#not_found'
end
