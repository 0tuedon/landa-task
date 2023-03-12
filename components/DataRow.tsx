import React from "react";
import HamburgerIcon from "./Hamburger";

interface ISubjectData {
  subject: string;
  question: number;
  participants: string;
  pass: string;
  failed: string;
}
interface IDataRow {
  index: number;
  data: ISubjectData;
}
const DataRow = ({ data, ...props }: IDataRow) => {
  return (
    <tr
      className={`border-x-0 border-t border-b-0 
        ${props.index % 2 === 0 ? "" : "bg-[#F8F9FC]"}
    `}
    >
      <th
        className=" px-6 align-middle flex items-center space-x-3   
      text-sm whitespace-nowrap p-4 text-left "
      >
        <img src="/unilag.svg" alt="unilag photo" />
        <p className="font-normal">{data.subject}</p>
      </th>
      <td className=" px-6 align-middle   text-sm whitespace-nowrap p-4 ">
        {data.question}
      </td>
      <td className=" px-6 align-center   text-sm whitespace-nowrap p-4">
        {data.participants}
      </td>
      <td className="px-6 align-middle   text-sm whitespace-nowrap p-4">
        {data.pass}
      </td>
      <td className="px-6 align-middle   text-sm whitespace-nowrap p-4">
        {data.failed}
      </td>
      <td>
        <HamburgerIcon className="cursor-pointer" />
      </td>
    </tr>
  );
};

export default DataRow;
