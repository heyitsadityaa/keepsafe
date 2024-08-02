## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

A healthcare platform that streamlines patient registration, authentication and appointment scheduling. This platform will utilize Next.js for building the application, Appwrite for backend services, TypeScript for type-safe JavaScript, TailwindCSS for styling, and ShadCN for component management. The patient-facing side of the platform will allow users to manage their appointments, while an admin page will be provided to manage the number of scheduled, pending, and canceled appointments.

## <a name="tech-stack">Tech Stack</a>

- Next.js(14.2.3)
- Appwrite(^12.0.1)
- Typescript(^5)
- TailwindCSS(^3.4.1)
- ShadCN

## <a name="features">Features</a>

**Register as a Patient**: Users can sign up and create a personal profile as a patient.

**Book a New Appointment with Doctor**: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

**Manage Appointments on Admin Side**: Administrators can efficiently view and handle all scheduled appointments.

**Confirm/Schedule Appointment from Admin Side**: Admins can confirm and set appointment times to ensure they are properly scheduled.

**Cancel Appointment from Admin Side**: Administrators have the ability to cancel any appointment as needed.

**Complete Responsiveness**: The application works seamlessly on all device types and screen sizes.

**File Upload Using Appwrite Storage**: Users can upload and store files securely within the app using Appwrite storage services.

## <a name="quick-start">Quick Start</a>

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone
cd KeepSafe-main
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=
NEXT_PUBLIC_ADMIN_PASSKEY=
```

Replace the placeholder values with your actual Appwrite credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

OR

```bash
npm start
```
