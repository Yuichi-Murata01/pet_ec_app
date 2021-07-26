Rails.application.routes.draw do
  get 'users' ,to: 'users#index'
  get 'people',to: 'people#index'
  get 'people/add'
  post 'people/add', to: 'people#create'
  get 'people/:id', to: 'people#show'
  get '/' => 'home#top'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
