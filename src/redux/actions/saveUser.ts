import { TUser } from "../../dataTypes";
import { SAVE_USER } from "./types";

const saveUser = (userData: TUser[]) => (
  {
    type: SAVE_USER,
    payload: {
      userData,
    }
  }
);

export default saveUser;
