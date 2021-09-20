import { TClass } from "../../dataTypes";
import { SAVE_CLASSES } from "./types";

const saveClasses = (classesData: TClass[]) => (
  {
    type: SAVE_CLASSES,
    payload: {
      classesData,
    }
  }
);

export default saveClasses;