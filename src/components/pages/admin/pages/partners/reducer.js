import { find } from 'lodash-es';
import { actionTypes } from '../../../../../constants/actionTypes';

const initialState = {
  error: null,
  loading: false,
  isConfirmationModalOpen: false,
  isCreationModalOpen: false,
  successMessage: '',
  itemForUpdate: null,
  partners: {
    isLoaded: false,
    data: [],
  },
};

function replaceObjectInArray(data, object) {
  const atIndex = data.findIndex(({ id }) => id === object.id);

  return [...data.slice(0, atIndex), object, ...data.slice(atIndex + 1)];
}

function remove(array, itemId) {
  return array.filter(({ id }) => id !== itemId);
}

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    // GET PARTNERS ACTIONS
    case actionTypes.updateState:
      return { ...state, ...payload };

    case actionTypes.getPartnersRequest:
      return { ...state, loading: true };

    case actionTypes.getPartnersSuccess:
      return {
        ...state,
        loading: false,
        partners: {
          ...payload,
          isLoaded: true,
        },
      };
    case actionTypes.getPartnersFailure:
      return { ...state, loading: false, error: payload };

    // DELETE PARTNERS ACTIONS
    case actionTypes.deletePartnerRequest:
      return { ...state, loading: true, error: null };

    case actionTypes.deletePartnerSuccess:
      return {
        ...state,
        loading: false,
        partners: {
          ...state.partners,
          data: remove(state.partners.data, payload),
        },
      };

    case actionTypes.deletePartnerFailure:
      return { ...state, loading: false, error: action.payload };

    // CREATE PPARTNERS ACTIONS

    case actionTypes.createPartnerRequest:
      return { ...state, loading: true, error: null };

    case actionTypes.createPartnerSuccess:
      return {
        ...state,
        loading: false,
        partners: {
          ...state.partners,
          isLoaded: true,
          data: [action.payload, ...state.partners.data],
        },
      };

    case actionTypes.createPartnerFailure:
      return { ...state, loading: false, error: action.payload };

    // UPDATE PARTNERS ACTIONS

    case actionTypes.onUpdateButtonClick:
      return {
        ...state,
        isCreationModalOpen: true,
        itemForUpdate: find(state.partners.data, ['id', action.payload.id]),
      };

    case actionTypes.updatePartnerRequest:
      return { ...state, loading: true, error: null };

    case actionTypes.updatePartnerSuccess:
      return {
        ...state,
        loading: false,
        partners: {
          ...state.partners,
          isLoaded: true,
          data: replaceObjectInArray(state.partners.data, action.payload),
        },
      };

    case actionTypes.updatePartnerFailure:
      return { ...state, loading: false, error: action.payload };

    // MODAL ACTIONS

    case actionTypes.openConfirmationModal:
      return { ...state, isConfirmationModalOpen: true };

    case actionTypes.openCreationModal:
      return { ...state, isCreationModalOpen: true };

    case actionTypes.closeCreationModal:
      return { ...state, isCreationModalOpen: false, itemForUpdate: null };

    case actionTypes.closeConfirmationModal:
      return { ...state, isConfirmationModalOpen: false };

    default:
      return initialState;
  }
}

export { initialState, reducer };
