import MaxWidthWrapper from "@/app/components/defaults/MaxWidthWrapper";
import { TableCustom } from "@/app/components/TableCustom";
import React from "react";
import { appointmentColumns } from "./columns";
import TableHeading from "@/app/components/TableHeading";
import { BASE_URL } from "@/app/constants";

const appointmentData: any[] = [
  {
    appointmentDate: "2024-09-20",
    dateBooked: "2024-09-20",
    status: "Confirmed",
  },
  {
    appointmentDate: "2024-09-20",
    dateBooked: "2024-09-20",
    status: "Confirmed",
  },
  {
    appointmentDate: "2024-09-20",
    dateBooked: "2024-09-20",
    status: "Confirmed",
  },
];

const MyAppointmentsPage = async ({ params }: { params: { id: string } }) => {
   const res = await fetch(`${BASE_URL}/books`);
  return (
    <MaxWidthWrapper>
      <TableHeading
        back={`/clinic/${params.id}/mybooks`}
        paragraph="هنا ستجد جميع المرضي الذين حجزو عندك"
        title="الحجوزات الحالية"
      />
      <TableCustom columns={appointmentColumns} data={appointmentData} />
    </MaxWidthWrapper>
  );
};

export default MyAppointmentsPage;
