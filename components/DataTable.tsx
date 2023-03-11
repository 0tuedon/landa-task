import React from "react";
import DataRow from "./DataRow";
import { allSubject } from "@/utils/allSubject";

const DataTable = () => {
  return (
    <table className="items-center mt-11 bg-transparent w-full  ">
      <thead>
        <tr>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle    py-3 text-sm    whitespace-nowrap font-semibold text-left">
            Name
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-sm  whitespace-nowrap font-semibold text-left">
            Questions
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-sm    whitespace-nowrap font-semibold text-left">
            Participants
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle    py-3 text-sm    whitespace-nowrap font-semibold text-left">
            Pass
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle    py-3 text-sm    whitespace-nowrap font-semibold text-left">
            Failed
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle    py-3 text-sm    whitespace-nowrap font-semibold text-left"></th>
        </tr>
      </thead>

      <tbody className="mt-4">
        {allSubject.map((data, index) => (
          <DataRow key={data.subject} index={index} data={data} />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
