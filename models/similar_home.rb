
def similar_homes
  departaments_id=[]

  Home.pluck(:id).each do |n|
    id = n.to_s
    home= Home.find(id)
    Home.pluck(:total_amount).each do |total| 
      
      if home.total_amount==total
        Home.pluck(:owner).each do |owner| 
          
          if home.owner.id == owner  
            Home.pluck(:id).each do |status|
              id_status = status.to_s
              state = Home.find(id_status)
             
              if home.status == :published
                Home.pluck(:location).each do |location|
                  departaments_id.push(id)
                end                  
              end
            end
          end  
        end          
      end  
    end
  end  
  departaments_id.uniq.each do |n|
    home=Home.find(n)
    p  "#{home.owner.user.name} #{home.owner.user.last_name} #{home.owner.user.email} #{n} #{home.price} #{home.status} #{home.location} " 
  end
end

similar_homes