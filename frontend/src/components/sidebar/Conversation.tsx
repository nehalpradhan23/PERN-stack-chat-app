const Conversation = ({ conversation }: { conversation: any }) => {
  return (
    <>
      <div className="flex gap-2 items-center bg-gray-200 border-b border-black/30 hover:bg-gray-300 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-8 md:w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-center">
          <div className="flex gap-3 justify-between items-center">
            <p className="font-bold text-sm md:text-md">
              {conversation.fullName}
            </p>
            <span className="text-xl hidden md:inline-block">
              {conversation.emoji}
            </span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};
export default Conversation;
