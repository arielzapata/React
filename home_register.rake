namespace :home_register do
  desc "Creating home register"
  task home: :environment do           
  user=User.create({
    :email => "Milo@hotmail.com",
    :name => "Milo",
    :last_name => "Zapata",
    :mobile_phone => "9991189420",
    :work_place => "Merida"
    })       
  owner=Owner.create({
    user: user,
    :curp => "1234",
    :registered_in_srpago => true
    })  

  User.find_or_create_by(name: "") do     
    home = Home.create!({
      :owner => owner,
      :price => 1600,
      :extra_service => 1300,
      :location => [-99.23312123333,19.35111],
      :master_home_id => nil,
      :home_features => {
        garden: true,
        furnished: true,
        gym: false
      }
    })
    home.published!
  end
  User.find_or_create_by(name: "") do 
    home2 = Home.create!({
      :owner => owner,
      :price => 1600,
      :extra_service => 1300,
      :location => [-99.23312123333,19.35111],
      :master_home_id => nil,
      :home_features => {
        garden: true,
        furnished: true,
        gym: false
      }
    })
    home2.published!
    end     
  end
end