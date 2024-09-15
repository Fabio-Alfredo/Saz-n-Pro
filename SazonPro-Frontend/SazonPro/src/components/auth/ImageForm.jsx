import React from "react";
import Icon01 from "../../assets/BlobsVector.png"
import Icon02 from "../../assets/BlobsVector2.png"
import Icon03 from "../../assets/BlobsVector3.png"
import IconPage from "../../assets/recetas.png"

const ImageForm = () => {
  return (
    <>
      <div className="relative w-5/6">
        <img src={Icon02} className="absolute -top-36 -left-2" />
        <img src={Icon03} className="absolute -top-44 left-8" />
        <img src={Icon01} className="absolute top-8 right-2" />
        <div className="flex justify-center items-center absolute w-full h-52  p-4 rounded-[50%/60%_40%] bg-white right-1 -top-16">
          <img src={IconPage} />
        </div>
      </div>
    </>
  );
};

export default ImageForm;
