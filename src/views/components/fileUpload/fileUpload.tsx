import { FC } from "react";

interface FileUploadProps {
  setSelectedVideo: Function;
}

const FileUpload: FC<FileUploadProps> = ({ setSelectedVideo }) => {
  const handleVideoUpload = (file: File | null) => {
    setSelectedVideo(file);
  };

  return (
    <div>
      <input
        id="file-input-label"
        type="file"
        accept="video/*"
        onChange={(e: any) =>
          handleVideoUpload(e.target.files ? e.target.files[0] : null)
        }
        className="
        file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
               file:px-7 file:py-3 file:m-5
               file:border-none
               file:rounded-full
               file:text-white
               file:coursor-pointer
               file-shadow-lg
               text-white
               rounded-full
               cursor-pointer
              "
      />
    </div>
  );
};

export default FileUpload;
