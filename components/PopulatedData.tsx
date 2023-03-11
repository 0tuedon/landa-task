import React from "react";
import { PrimarySelect } from "./Selects";
import { PrimaryInput } from "./Inputs";
import SearchIcon from "@/assets/SearchIcon";
import { PrimaryButton } from "./Button";
import DataTable from "./DataTable";

const PopulatedData = () => {
  return (
    <div className="p-5 border flex mt-11 flex-col border-border">
      <div className="flex space-x-2 ">
        <PrimarySelect
          className="py-4 px-5"
          label="University of Lagos"
          options={[{ label: "University of Lagos", value: "" }]}
        />
        <PrimaryInput
          leftIcon={SearchIcon}
          divClass="min-w-[530px]"
          placeholder="Search for Subject..."
        />

        <PrimaryButton className="py-4 px-6">Add Subject</PrimaryButton>
      </div>

      <DataTable />
    </div>
  );
};

export default PopulatedData;
