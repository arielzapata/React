class User 
  include Mongoid::Document
  field :email, type: String
  field :name, type: String
  field :last_name, type: String
  field :mobile_phone, type: String
  field :work_place, type: String
  
  has_many :rents 

  validates_presence_of :email
  validates_presence_of :name
  validates_presence_of :last_name
  validates_presence_of :mobile_phone
  validates_presence_of :work_place
end