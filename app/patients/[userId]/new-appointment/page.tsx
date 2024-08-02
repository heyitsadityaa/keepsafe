import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen items-center justify-center">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
          <p className="copyright mt-10 py-12">© 2024 KeepSafe</p>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
