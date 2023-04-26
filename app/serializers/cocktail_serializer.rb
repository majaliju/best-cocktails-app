class CocktailSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients

  has_many :bar_cocktails
  has_many :bars, through: :bar_cocktails, serializer: BarSerializer
  has_many :reviews, through: :bar_cocktails, serializer: ReviewSerializer
end
