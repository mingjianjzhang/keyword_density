class MainController < ApplicationController
  def index

  end
  def search 
  	data = [{name:"Friend", y:18.5}, {name:"Mother", y:11.5}, {name:"Father", y:24.4}, {name:"Sally", y:30.4}, {name:"Likely", y:4}]
  	render json: data
  end
end
