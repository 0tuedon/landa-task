import { IModal } from "@/types/";
import React from "react";
import ReactDOM from "react-dom";

import { PrimaryButton } from "./Button";
import { PrimarySelect } from "./Selects";
import { PrimaryInput } from "./Inputs";

const CreateSubjectModal = (props: IModal) => {
  const onClickSave = () => {
    props.onClose();
    props.setPopulated((prev) => !prev);
  };
  if (typeof window === "object") {
    // Check if document is finally loaded
    return ReactDOM.createPortal(
      props.isOpen && (
        <>
          <div
            className="  w-screen cursor-pointer top-0  z-[60] fixed h-screen bg-black/50"
            onClick={() => props.onClose()}
          />
          <div className="fixed top-[10vh] left-[30vw]  z-[70]  p-4 overflow-x-hidden w-full   ">
            <div className="relative w-full h-full  md:h-auto max-w-lg">
              <div className="relative flex flex-col justify-between space-y-4 lg:min-h-[538px]  shadow bg-white">
                <div>
                  <div className="flex items-start bg-primary px-[30px] py-[29px]  justify-between p-4 border-b border-border">
                    <h3 className="text-base font-semibold text-text_blue">
                      Create Subject
                    </h3>
                  </div>
                  <form className="flex px-[30px] mt-10 space-y-8 flex-col">
                    <div className="flex flex-col space-y-1">
                      <p className="text-text_blue">Institution</p>
                      <PrimarySelect
                        className="py-3 px-4"
                        options={[{ label: "Unilag", value: "Unilag" }]}
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <p className="text-text_blue">Subject</p>
                      <PrimaryInput
                        className="py-3 px-4"
                        placeholder="Enter Name"
                      />
                    </div>
                  </form>
                </div>

                <div className="flex items-center border-t border-border p-6 space-x-2 ">
                  <PrimaryButton
                    onClick={onClickSave}
                    className="py-4 px-12 rounded-sm"
                  >
                    Save
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      document.querySelector("#__next") as HTMLElement
    );
  } else {
    return <></>;
  }
};

export default CreateSubjectModal;
