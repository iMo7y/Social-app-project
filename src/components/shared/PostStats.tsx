import { Models } from "appwrite";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
type PostStatsProps = {
    post: Models.Document;
    userId: string;
}

const PostStats = ({ post, userId }: PostStatsProps) => {
  return (
    <div className="flex justify-between items-center z-20">
     <div className="flex gap-2 mr-5">
      <img 
        src="/assets/icons/like.svg"
      />
     </div>
    </div>
  )
}

export default PostStats