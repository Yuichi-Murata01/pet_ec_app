class PeopleController < ApplicationController
  def index
    @msg = 'Person data.'
    @data = Person.all
  end

  def show
    @msg = 'indexed data.'
    @data = Person.find(params[:id])
  end

  def add
    @msg = "add new data."
  end

  def create
    if request.post? then
      obj = Person.create(
        name: params['name'],
        age: params['age'],
        mail: params['mail']
      )
    end
    redirect_to '/people'
  end

  private
  def person_params
    params.require(:person).permit(:name, :age, :mail)
  end

end
