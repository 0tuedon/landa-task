import EmptyState from "@/components/EmptyState";
import PopulatedData from "@/components/PopulatedData";
import MainLayout from "@/layouts/MainLayout";
import React, { useState } from "react";

const Assessments = () => {
  const [populated, setPopulated] = useState(false);
  return (
    <div className=" flex flex-col p-[50px]">
      <div className="flex space-x-4">
        <div className="bg-active_tab px-8 py-3  text-dark_200">
          <p>Question Bank</p>
        </div>
        <div className="px-8 py-3 cursor-not-allowed">
          <p className="text-disabled_tab">Assessments</p>
        </div>
      </div>
      {!populated ? (
        <EmptyState setPopulated={setPopulated} />
      ) : (
        <PopulatedData />
      )}
    </div>
  );
};

Assessments.requireLayout = true;
Assessments.getLayout = (page: React.ReactElement) => (
  <MainLayout title="Assessments">{page}</MainLayout>
);

export default Assessments;
