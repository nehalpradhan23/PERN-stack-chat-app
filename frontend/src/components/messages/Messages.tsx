import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [3].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading &&
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center font-semibold mt-10">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};
export default Messages;
