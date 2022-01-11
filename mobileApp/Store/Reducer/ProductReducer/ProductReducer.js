import {catogeryData, Products} from '../../../Dummy-data/data';
const initialState = {
  product: Products,
  allCategory: catogeryData,
};
export default (state = initialState, action) => {
  return state;
};
