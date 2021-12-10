class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient
  def self.all_and_then_some
    appointments = Appointment.all
    appointments.map do |appointment|
      {id: appointment.id, session: appointment.session, doctor: appointment.doctor.name, patient: appointment.patient.name, doctor_id:appointment.doctor.id, patient_id:appointment.patient.id}
    end
  end
  
end
