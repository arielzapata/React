def consecutive_letters(letters)
  (letters).each do |letters|
    return unless ("a".."z").to_a.join.include? letters.downcase
  end
  true
end

letters = ['AB', 'BC', 'CD']
consecutive_letters(letters)
