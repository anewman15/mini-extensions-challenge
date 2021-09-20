import { SAVE_USER } from "./types";

const saveUser = userData => (
  {
    type: SAVE_USER,
    payload: {
      userData,
    }
  }
);

export default saveUser;
