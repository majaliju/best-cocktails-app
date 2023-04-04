class BarsController < ApplicationController
  before_action :set_bar, only: %i[ show update destroy ]

  # GET /bars
  def index
    @bars = Bar.all

    render json: @bars
  end

  # GET /bars/1
  def show
    render json: @bar
  end

  # POST /bars
  def create
    @bar = Bar.new(bar_params)

    if @bar.save
      render json: @bar, status: :created, location: @bar
    else
      render json: @bar.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bars/1
  def update
    if @bar.update(bar_params)
      render json: @bar
    else
      render json: @bar.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bars/1
  def destroy
    @bar.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bar
      @bar = Bar.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bar_params
      params.require(:bar).permit(:name, :city, :state, :address, :latitude, :decimal, :longitude)
    end
end