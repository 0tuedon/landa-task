import React from "react";
import { PrimarySelect } from "./Selects";
import { PrimaryInput } from "./Inputs";
import SearchIcon from "@/assets/SearchIcon";
import { PrimaryButton } from "./Button";
import DataTable from "./DataTable";
import useDisclosure from "@/hooks";
import CreateSubjectModal from "./CreateSubjectModal";

export interface IPopulatedData {
  setPopulated: React.Dispatch<React.SetStateAction<boolean>>;
}
const PopulatedData = (props: IPopulatedData) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="p-5 border flex mt-11 max-w-full  flex-col overflow-x-auto border-border">
      <div className="flex space-x-2 items-center space-y-4 lg:space-y-0 flex-wrap ">
        <PrimarySelect
          className="py-4 px-5 "
          label="University of Lagos"
          options={[{ label: "University of Lagos", value: "" }]}
        />
        <PrimaryInput
          leftIcon={SearchIcon}
          divClass="min-w-[530px] py-4  px-5"
          placeholder="Search for Subject..."
        />

        <PrimaryButton className=" py-4 px-6" onClick={onOpen}>
          Add Subject
        </PrimaryButton>
      </div>

      <DataTable />
      <CreateSubjectModal
        setPopulated={props.setPopulated}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
      />
    </div>
  );
};

export default PopulatedData;
