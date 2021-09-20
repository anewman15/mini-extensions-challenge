import { SAVE_CLASSES } from "./types";

const saveClasses = classesData => (
  {
    type: SAVE_CLASSES,
    payload: {
      classesData,
    }
  }
);

export default saveClasses;