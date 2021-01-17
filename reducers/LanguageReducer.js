import { languages } from '../screens/Languages'
const INITIAL_STATE = languages.dansk;
export default (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case 'language_data':
   return action.payload;
  default: 
   return state;
 }
};