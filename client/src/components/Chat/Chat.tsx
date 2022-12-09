import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchChats } from "../../store/reducers/chat";
import Navbar from "./components/Navbar/Navbar";

const Chat = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChats())
      .then((res) => console.log(res))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Chat;
