import { useAppSelector } from "../../store";
import Navbar from "./components/Navbar/Navbar";

const Chat = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div>
      <Navbar />
      
    </div>
  );
};

export default Chat;
