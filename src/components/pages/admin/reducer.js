import { find } from 'lodash-es';
import { actionTypes } from '../../../constants/actionTypes';

const initialState = {
  error: null,
  loading: false,
  isConfirmationModalOpen: false,
  isCreationModalOpen: false,
  successMessage: '',
  itemForUpdate: null,
  posts: {
    isLoaded: false,
    data: [],
  },
  reports: {
    isLoaded: false,
    data: [],
  },
};

function replaceObjectInArray(data, object) {
  const atIndex = data.findIndex(({ id }) => id === object.id);

  return [
    ...data.slice(0, atIndex),
    object,
    ...data.slice(atIndex + 1)
  ]
};

function remove(array, itemId) {
  return array.filter(({ id }) => id !== itemId);
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    // GET ACTIONS
    case actionTypes.updateState:
      return { ...state, ...payload };

    case actionTypes.getPostsRequest:
      return { ...state, loading: true };

    case actionTypes.getPostsSuccess:
      return { 
        ...state,
        loading: false,
        posts:  {
          data: payload, 
          isLoaded: true,
        }
      };
    case actionTypes.getPostsFailure:
      return { ...state, loading: false, error: payload };

    case actionTypes.getReportsRequest:
      return { ...state, loading: true };

    case actionTypes.getReportsSuccess:
      return { 
        ...state,
        loading: false,
        reports:  {
          data: payload, 
          isLoaded: true,
        }
      };

    case actionTypes.getReportsFailure:
      return { ...state, loading: false, error: payload };

    // DELETE ACTIONS
    case actionTypes.deletePostRequest:
      return { ...state, loading: true, error: null };

    case actionTypes.deletePostSuccess:
      return { 
        ...state, 
        loading: false,
        posts: { 
          ...state.posts,
          data: remove(state.posts.data, payload),
         }
      };
    
    case actionTypes.deletePostFailure:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.deleteReportRequest:
      return { ...state, loading: true };

    case actionTypes.deleteReportSuccess:
      return { 
        ...state, 
        loading: false,
        reports: { 
          ...state.reports,
          data: remove(state.reports.data, payload),
        },
      };

    case actionTypes.deleteReportFailure:
      return { ...state, loading: false, error: action.payload };

    // CREATE ACTIONS
        
    case actionTypes.createReportRequest:
      return { ...state, loading: true, error: null };

    case actionTypes.createReportSuccess:
      return { 
        ...state, 
        loading: false,
        reports: {
          isLoaded: true,
          data: [action.payload, ...state.reports.data],
        },
     };

    case actionTypes.createReportFailure:
      return { ...state, loading: false, error: action.payload };


    case actionTypes.createPostRequest:
      return { ...state, loading: true, error: null };

    case actionTypes.createPostSuccess:
      return { 
        ...state, 
        loading: false,
        posts: {
          isLoaded: true,
          data: [action.payload, ...state.posts.data],
        },
      };

    case actionTypes.createPostFailure:
      return { ...state, loading: false, error: action.payload };

    // UPDATE ACTIONS

    case actionTypes.onUpdateButtonClick:
      return {
        ...state,
        isCreationModalOpen: true,
        itemForUpdate: find(state[action.payload.targetName].data, ['id', action.payload.id]) 
      }

    case actionTypes.updateReportRequest:
      return { ...state, loading: true, error: null };

    case actionTypes.updateReportSuccess:
      return { 
        ...state, 
        loading: false,
        itemForUpdate: null,
        reports: {
          isLoaded: true,
          data: replaceObjectInArray(state.reports.data, action.payload),
        },
     };

    case actionTypes.updateReportFailure:
      return { ...state, loading: false, error: action.payload };


    case actionTypes.updatePostRequest:
      return { ...state, loading: true, error: null };

    case actionTypes.updatePostSuccess:
      return { 
        ...state, 
        loading: false,
        posts: {
          isLoaded: true,
          data: replaceObjectInArray(state.posts.data, action.payload),
        },
      };

    case actionTypes.updatePostFailure:
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
};

export { initialState, reducer };