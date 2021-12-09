# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

 Patient.create(name: 'Ruby')
 Patient.create(name: 'John')
 Patient.create(name: 'Mike')
 Patient.create(name: 'James')
 Patient.create(name: 'Elise')
 Patient.create(name: 'Michael')
 

5.times do
 doctor = Doctor.create(name: Faker::Name.name)
 
#each doctor will have a appointment for each patient**
 6.times do |i|
  Appointment.create(doctor_id: doctor.id, patient_id: i+1, session: Faker::Date.forward(days: 23))
 end
end

