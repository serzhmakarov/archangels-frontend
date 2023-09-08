import React, { useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { actionTypes } from '../../../../../../constants/actionTypes';
import { adminTableFields } from '../../../constants';
import FormField from '../../../nested/FormField';

const ModalCreateItem = ({
  isModalShow,
  handleCreateClick,
  loading,
  dispatch,
  itemForUpdate,
}) => {
  const { register, handleSubmit, reset, watch, setValue } = useForm();

  useEffect(() => {
    if (!itemForUpdate) return;

    reset(itemForUpdate);
    setValue('photo', null);
  }, [itemForUpdate, setValue, reset]);

  const handleClose = () => {
    dispatch({ type: actionTypes.closeCreationModal });
  };

  function onSubmit(data) {
    const { photo, ...dataWithoutPhoto } = data;

    handleCreateClick({
      ...dataWithoutPhoto,
      photo: photo ? photo[0] : null,
    }).then(() => handleClose());
  }

  const actionTitleName = itemForUpdate ? 'Редагувати' : 'Cтворити';

  const reportId = watch('id');

  return (
    <Modal
      size="lg"
      show={isModalShow}
      onHide={handleClose}
      className="admin-create-form-page__modal"
    >
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="admin-create-form-page__form-wrapper"
      >
        <h1>
          {actionTitleName} запис {reportId || ''}
          {itemForUpdate?.photo_url && (
            <img
              className="report-preview-image"
              src={itemForUpdate.photo_url}
              alt="report_preview"
            />
          )}
        </h1>

        {adminTableFields.map((props) => (
          <FormField {...props} key={props.name} register={register} />
        ))}
        <div className="admin-create-form-page__action-buttons">
          <Button
            variant="secondary"
            type="button"
            className="submit-button"
            onClick={handleClose}
          >
            Скасувати
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Загрузка...' : 'Відправити'}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalCreateItem;
