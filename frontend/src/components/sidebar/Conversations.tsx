// import { DUMMY_CONVERSATIONS } from "../../dummy_data/dummy";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto h-full">
      {conversations.map((conversation) => (
        <Conversation key={conversation.id} conversation={conversation} />
      ))}
      {loading ? (
        <div className="flex items-center justify-center h-full font-semibold">
          Loading...
        </div>
      ) : null}
    </div>
  );
};
export default Conversations;
