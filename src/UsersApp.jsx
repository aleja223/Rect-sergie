import { useState } from "react";
import { UserList } from "./component/userList";

export const UsersApp = () => {
  const [endPoint, setendPoint] = useState("users");
  const handleFech = () => {
    setendPoint("comments");
  };

  return (
    <>
      <h1>listado usuarios:</h1>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFech}>Clic aquí</button>
    </>
  );
};
