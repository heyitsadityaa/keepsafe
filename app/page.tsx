import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <PatientForm />

          <div className="mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 KeepSafe
            </p>
            <Link
              href="/?admin=true"
              className="text-blue-500 hover:underline font-bold underline-offset-2"
            >
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.jpg"
        height={800}
        width={800}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
