const Message = ({ message }: { message?: any }) => {
  const chatStart = "flex justify-start w-full";
  const chatEnd = "flex justify-end w-full";

  const fromMe = message?.fromMe;
  const chatClass = fromMe ? chatEnd : chatStart;

  const img = fromMe
    ? "https://avatar.iran.liara.run/public/boy?username=johndoe"
    : "https://avatar.iran.liara.run/public/boy?username=janedoe";

  const bubbleBg = fromMe ? "bg-blue-500 text-white" : "bg-gray-200";
  return (
    <div className={`${chatClass} my-4`}>
      <div className="hidden md:block">
        <div className="w-6 md:w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={img} />
        </div>
      </div>
      <p className={`${bubbleBg} text-sm md:text-md rounded-md p-1 mx-2`}>
        {message.body}
      </p>
      <span className="opacity-50 text-xs flex gap-1 items-center">22:59</span>
    </div>
  );
};
export default Message;
