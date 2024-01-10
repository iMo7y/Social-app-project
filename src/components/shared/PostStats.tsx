import { Models } from "appwrite";
import animationData from "./Hart.json"
import Lottie from "lottie-react"
type PostStatsProps = {
    post: Models.Document;
    userId: string;
}
const PostStats = ({ post, userId }: PostStatsProps) => {
  return (
    <div className="flex justify-between items-center z-20">
     <div className="flex gap-2 mr-5 w-20 h-20">
        <Lottie 
        className="cursor-pointer"
        onClick={() => {}}
        animationData={animationData}
        />
     </div>
    </div>
  )
}

export default PostStats