import MainLayout from "@/layouts/MainLayout";
import React from "react";

const Assessments = () => {
  return <div className="text-red-200"></div>;
};

Assessments.requireLayout = true;
Assessments.getLayout = (page: React.ReactElement) => (
  <MainLayout title="Assessments">{page}</MainLayout>
);

export default Assessments;
