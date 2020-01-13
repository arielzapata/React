class SimilarHome
  include Mongoid::Document
  def similar_homes
    home_owner = []
    homes = []
      
    Owner.pluck(:id).each do |id_owner|
      id_owner = id_owner
      homes = Owner.includes(:homes).find(id_owner).homes
  
      homes.each do |home| #comparacion entre los depas del owner (actual vs iteraciones)
        homies =  Home.find(home) 
        homes.each do |home_slice|
          current_home =  Home.find(home_slice) #Compara el home actual con todos
          next unless home != home_slice
          next unless homies.total_amount == current_home.total_amount
          next unless homies.status == current_home.status 
          next unless homies.location == current_home.location 
          next unless homies.home_master_id.nil?
            home_owner.push(homies.id.to_s)
        end           
      end
    end
  
    home_owner.uniq.each do |n|
      home = Home.find(n)
      puts  "#{ home.owner.user.name } #{ home.owner.user.last_name } #{ home.owner.user.email } #{ n } #{ home.total_amount } #{ home.status } #{ home.location } " 
    end
   end
  
  similar_homes
end