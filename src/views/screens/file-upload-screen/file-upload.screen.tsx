import {  FC, useState } from "react";
import { withLayout } from "@views/hoc/with-layout";
import VideoPlayer from "@/views/components/video-player-canvas/videoPlayer";
import FileUpload from "@/views/components/fileUpload/fileUpload";


export const FileUploadScreen: FC<any> = withLayout(() => {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  
    return (
      <div className="flex flex-col justify-center items-center">
       {!selectedVideo && <FileUpload setSelectedVideo={setSelectedVideo} />}
        <VideoPlayer
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      </div>
    );
  }
);
