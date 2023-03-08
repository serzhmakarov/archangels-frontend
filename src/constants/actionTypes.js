const actionTypes = {
  updateState: 'UPDATE_STATE',
  
  getReportsRequest: 'GET_REPORTS_REQUEST',
  getReportsSuccess: 'GET_REPORTS_SUCCESS',
  getReportsFailure: 'GET_REPORTS_FAILURE',

  deleteReportRequest: 'DELETE_REPORT_REQUEST',
  deleteReportSuccess: 'DELETE_REPORT_SUCCESS',
  deleteReportFailure: 'DELETE_REPORT_FAILURE',

  createReportRequest: 'CREATE_REPORT_REQUEST',
  createReportSuccess: 'CREATE_REPORT_SUCCESS',
  createReportFailure: 'CREATE_REPORT_FAILURE',

  updateReportRequest: 'UPDATE_REPORT_REQUEST',
  updateReportSuccess: 'UPDATE_REPORT_SUCCESS',
  updateReportFailure: 'UPDATE_REPORT_FAILURE',

  closeConfirmationModal: 'CLOSE_CONFIRAMTION_MODAL',
  closeCreationModal: 'CLOSE_CREATION_MODAL',

  openConfirmationModal: 'OPEN_CONFIRAMTION_MODAL',
  openCreationModal: 'OPEN_CREATION_MODAL',

  onUpdateButtonClick: 'ON_UPDATE_BUTTON_CLICK',
};

export { actionTypes }