import actionTypes from '../../constants/actions';

/**
 * The reducer for maintaining active peer
 *
 * @param {Array} state - the current state object
 * @param {Object} action - The action containing type and data
 *
 * @returns {Object} - Next state object
 */
const peers = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.activePeerSet:
      return Object.assign({}, state, { data: action.data });
    case actionTypes.activePeerUpdate:
      return Object.assign({}, state, { status: action.data });
    case actionTypes.activePeerReset:
      return Object.assign({}, state, { data: null, status: null });
    default:
      return state;
  }
};

export default peers;
