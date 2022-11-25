import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Field from './field';
import Alert from '../../globals/alert'
import useSendForm from '../../../hooks/useSendForm';
import { contactFormFields } from '../../../constants';

const ContactForm = () => {
	const { callback, loading, message } = useSendForm();
	const { handleSubmit, control } = useForm();

	const onSubmit = data => {
		callback(data);
  };

	return (
			<Row className="home-page__contact-form-wrapper content-wrapper">
				<Col sm={4} id="contacts">
					<h1 className="title-block-text">
						ЗВ’ЯЗАТИСЯ <br /> 
						З НАМИ
					</h1>
					<div className="contacts-info">
						<h3>Наші контакти:</h3>
						<div className="contacts-info__block">
							<div className="">
								Email: <a href="mailto:archangelsofkyiv@gmail.com">archangelsofkyiv@gmail.com</a>
							</div>
							<div>
								Telegram: <a href="https://t.me/Solomka_Help">t.me/Solomka_Help</a>
							</div>
						</div>
					</div>
				</Col>
				<Col sm={8}>
					<Form 
						id="contact_form"
						onSubmit={handleSubmit(onSubmit)}
					>
					<Alert 
						message={message}
						color="green"
					/>
            {contactFormFields.map((field) => (
               <Field
                  control={control}
                  key={field.key}
                  {...field}
               />
            ))}

						<Button variant="outline-danger" className="archangels-btn" type="submit">
							{loading ? 'ВІДПРАВЛЕННЯ...' : 'ВІДПРАВИТИ'}
						</Button>
					</Form>
				</Col>
			</Row>
		);
};

export default ContactForm;