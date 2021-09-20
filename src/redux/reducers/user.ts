import { TUser } from "../../dataTypes";

type Action = {
  type: string,
  payload: {
    userData: TUser
  }
};

const user = (state = {}, action: Action) => {
  switch (action.type) {
    case 'SAVE_USER': {
      return action.payload.userData
    }
    default: {
      return state;
    }
  }
};

export default user;
