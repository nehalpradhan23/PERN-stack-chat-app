import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-[80vh] border border-black/40 w-full md:max-w-screen-md md:h-[550px] rounded-lg overflow-hidden bg-gray-100">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
