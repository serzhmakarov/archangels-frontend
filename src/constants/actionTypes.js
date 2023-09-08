const actionTypes = {
  updateState: 'UPDATE_STATE',

  closeConfirmationModal: 'CLOSE_CONFIRAMTION_MODAL',
  closeCreationModal: 'CLOSE_CREATION_MODAL',

  openConfirmationModal: 'OPEN_CONFIRAMTION_MODAL',
  openCreationModal: 'OPEN_CREATION_MODAL',

  onUpdateButtonClick: 'ON_UPDATE_BUTTON_CLICK',
  // Reports actions

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

  // Partners actions

  getPartnersRequest: 'GET_PARTNERS_REQUEST',
  getPartnersSuccess: 'GET_PARTNERS_SUCCESS',
  getPartnersFailure: 'GET_PARTNERS_FAILURE',

  createPartnerRequest: 'CREATE_PARTNER_REQUEST',
  createPartnerSuccess: 'CREATE_PARTNER_SUCCESS',
  createPartnerFailure: 'CREATE_PARTNER_FAILURE',

  updatePartnerRequest: 'UPDATE_PARTNERS_REQUEST',
  updatePartnerSuccess: 'UPDATE_PARTNERS_SUCCESS',
  updatePartnerFailure: 'UPDATE_PARTNERS_FAILURE',

  deletePartnerRequest: 'DELETE_PARTNER_REQUEST',
  deletePartnerSuccess: 'DELETE_PARTNER_SUCCESS',
  deletePartnerFailure: 'DELETE_PARTNER_FAILURE',

  // Projects actions

  getProjectsRequest: 'GET_PROJECTS_REQUEST',
  getProjectsSuccess: 'GET_PROJECTS_SUCCESS',
  getProjectsFailure: 'GET_PROJECTS_FAILURE',

  createProjectRequest: 'CREATE_PROJECT_REQUEST',
  createProjectSuccess: 'CREATE_PROJECT_SUCCESS',
  createProjectFailure: 'CREATE_PROJECT_FAILURE',

  updateProjectRequest: 'UPDATE_PROJECTR_REQUEST',
  updateProjectSuccess: 'UPDATE_PROJECTR_SUCCESS',
  updateProjectFailure: 'UPDATE_PROJECTR_FAILURE',

  updateProjectsRequest: 'UPDATE_PROJECTS_REQUEST',
  updateProjectsSuccess: 'UPDATE_PROJECTS_SUCCESS',
  updateProjectsFailure: 'UPDATE_PROJECTS_FAILURE',

  deleteProjectRequest: 'DELETE_RROJECT_REQUEST',
  deleteProjectSuccess: 'DELETE_RROJECT_SUCCESS',
  deleteProjectFailure: 'DELETE_RROJECT_FAILURE',
};

export { actionTypes };
