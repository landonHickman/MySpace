# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Test.destroy_all
User.destroy_all

Test.create(name: 'Test1')
Test.create(name: 'Test2')
Test.create(name: 'Test3')
Test.create(name: 'Test4')
Test.create(name: 'Test5')

5. times do
  name = Faker::Name.name
  email = Faker::Internet.email
  image = Faker::Avatar.image(slug: name, size: "100x100", format: "png", set: "set4")
  password = '1234567890'
  user = User.create(name: name, email: email, image: image, password: password)
  5.times do
    title = Faker::Hipster.word
    body = Faker::Hipster.paragraph
    user.posts.create(title: title , body: body)
  end
end

puts 'Seeded 5 tests'
puts 'seeded posts'
puts "#{Post.all.size} posts seeded"
puts 'seeded users'
puts "#{User.all.size} users seeded"