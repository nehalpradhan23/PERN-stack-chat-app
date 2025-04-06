import useConversation from "../../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }: { message: MessageType }) => {
  const chatStart = "flex justify-start w-full";
  const chatEnd = "flex justify-end w-full";

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message?.senderId === authUser?.id;
  const chatClass = fromMe ? chatEnd : chatStart;

  const img = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;

  const bubbleBg = fromMe
    ? "bg-blue-500 text-white"
    : "bg-gray-300 border border-black/20";

  return (
    <div className={`${chatClass} my-4`}>
      <div className="hidden md:block">
        <div className="w-6 md:w-10 rounded-full border border-black/40">
          <img alt="img" src={img} />
        </div>
      </div>
      <p className={`${bubbleBg} text-sm md:text-md rounded-md py-1 px-2 mx-2`}>
        {message.body}
      </p>
      <span className="opacity-50 text-xs flex gap-1 items-center">
        {extractTime(message.createdAt)}
      </span>
    </div>
  );
};
export default Message;
