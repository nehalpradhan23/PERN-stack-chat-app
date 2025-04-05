import useConversation from "../../../zustand/useConversation";

const Conversation = ({ conversation }: { conversation: ConversationType }) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const isSelected = selectedConversation?.id === conversation.id;

  const isOnline = false;

  return (
    <>
      <div
        className={`flex gap-2 items-center bg-gray-200 border border-black/20  hover:bg-gray-300 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-300 shadow-md" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={``}>
          <div className="w-8 md:w-12 rounded-full relative">
            <img src={conversation.profilePic} alt="user avatar" />
            {isOnline && (
              <div className="h-3 w-3 bg-green-600 rounded-full absolute top-0 right-0" />
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-center">
          <div className="flex gap-3 justify-between items-center">
            <p className="font-bold text-sm md:text-md">
              {conversation.fullName}
            </p>
            {/* <span className="text-xl hidden md:inline-block">
              {conversation.emoji}
            </span> */}
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};
export default Conversation;
