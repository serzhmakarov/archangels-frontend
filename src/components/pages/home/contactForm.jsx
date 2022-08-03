import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { contactFormFields } from '../../../constants';
import Field from './field';

const ContactForm = () => {
	const { handleSubmit, control, formState: { errors } } = useForm();

	const onSubmit = data => {
    console.log(data);
    console.log(errors);
  };

	return (
			<Row className="home-page__contact-form-wrapper content-wrapper">
				<Col sm={4} id="contacts">
					<h1 className="title-block-text">
						ЗВ’ЯЗАТИСЯ <br /> 
						З НАМИ
					</h1>
				</Col>
				<Col sm={8}>
					<Form onSubmit={handleSubmit(onSubmit)}>
            {contactFormFields.map((field) => (
               <Field
                  control={control}
                  key={field.key}
                  {...field}
               />
            ))}

						<Button variant="outline-danger" className="archangels-btn" type="submit">
							ВІДПРАВИТИ
						</Button>
					</Form>
				</Col>
			</Row>
		);
};

export default ContactForm;