import { TClass } from "../../dataTypes";

type Action = {
  type: string,
  payload: {
    classesData: TClass,
    Students: string[],
  }
}

const classes = (state = [], action: Action) => {
  switch (action.type) {
    case 'SAVE_CLASSES': {
      return action.payload.classesData
    }
    default: {
      return state;
    }
  }
};

export default classes;
