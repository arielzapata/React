def similar_homes
  departaments_id = []
  departaments_owner = []
    
  Owner.pluck(:id).each do |id_owner|
    id_owner = id_owner.to_s
    departaments = Home.pluck(:id).map { |own,home = Home.find(own)| own if id_owner == home.owner.id.to_s }
    departaments_id.push(departaments)
  end
  
  homes = departaments_id.each &:compact!   
 
  homes.each do |departments_group| 
    departments_group.each do |department|
      homies =  Home.find(department)
        departments_group.each do |departament_slice|
        homies2 =  Home.find(departament_slice)
        if department != departament_slice && homies.total_amount == homies2.total_amount  
          if homies.status == homies2.status && homies.location == homies2.location && homies.master_home_id.nil?
            departaments_owner.push(homies.id.to_s)
          end              
        end  
      end
    end
  end

  departaments_owner.uniq.each do |n|
    home=Home.find(n)
    puts  "#{ home.owner.user.name } #{ home.owner.user.last_name } #{ home.owner.user.email } #{ n } #{ home.total_amount } #{ home.status } #{ home.location } " 
  end
end

similar_homes