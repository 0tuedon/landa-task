import EmptyIcon from "@/assets/EmptyIcon";
import React from "react";
import { PrimaryButton } from "./Button";
import useDisclosure from "@/hooks";
import CreateSubjectModal from "./CreateSubjectModal";

export interface IEmptyState {
  setPopulated: React.Dispatch<React.SetStateAction<boolean>>;
}
const EmptyState = (props: IEmptyState) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="flex w-full items-center space-y-8 justify-center flex-col mt-14">
        <div>
          <EmptyIcon />
        </div>
        <p className="text-primary text-dark_200">
          Your subject question bank is empty.
        </p>
        <PrimaryButton onClick={() => onOpen()} className="px-6 py-[15px]">
          Create Subject
        </PrimaryButton>
      </div>
      <CreateSubjectModal
        isOpen={isOpen}
        setPopulated={props.setPopulated}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  );
};

export default EmptyState;
