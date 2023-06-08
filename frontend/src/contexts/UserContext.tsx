import { createContext, useState } from "react";
import UserModel from "../models/UserModel";

interface UserContextInterface {
    user: UserModel,
    token: string,
}

const DEFAULT_VALUE: UserContextInterface = {
    user: {
        id: 0,
        first_name: "",
        last_name: "string",
        email: "string",
        user_type: "",
        created_at: new Date('2023-06-08'),
    },

    token: ""
}

export const UserContext = createContext<UserContextInterface>(DEFAULT_VALUE);

export function UserProvider (props:any) {
  const [ user ] = useState<UserModel>(JSON.parse(localStorage.getItem("user") ?? ""));
  const [ token ] = useState<string>(localStorage.getItem("token") || "")

  return (
    <UserContext.Provider value={{ user, token }}>
      {props.children}
    </UserContext.Provider>
  );

};

export default { UserContext, UserProvider };
