import { createStore } from 'redux';
import combinedReducer from '../reducers';

const store = createStore(
  combinedReducer,
  {
    user: {
      id: 'dfsf',
      fields: {
        Name: 'Silly',
        Classes: [
        ],
      }
    },
    classes: [
      {
        id: 'sdasd',
        fields: {
          Name: 'sdfsdfsdg',
          Students: [],
        }
      }
    ],
    students: {
      "dsdf": "sdsf",
    }
  }
);

export default store;