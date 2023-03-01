import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

import Field from './field';
import Alert from '../../globals/alert'
import useSendForm from '../../../hooks/useSendForm';
import { contactFormFields } from '../../../constants';

const ContactForm = () => {
	const { t } = useTranslation();
	const { callback, loading, message, error } = useSendForm();
	const { handleSubmit, control } = useForm();

	const onSubmit = data => {
		callback(data);
  };

	return (
			<Row className="home-page__contact-form-wrapper content-wrapper">
				<Col sm={4} id="contacts">
					<h1 className="title-block-text">
						{t('home.contacts.title.first_part')} <br /> 
						{t('home.contacts.title.second_part')}
					</h1>
					<div className="contacts-info">
						<h3>{t('home.contacts.our_contacts')}</h3>
						<div className="contacts-info__block">
							<div className="">
								Email: <a href="mailto:admin@archangels.in.ua">admin@archangels.in.ua</a>
							</div>
							<div>
								Telegram: <a href="https://t.me/Solomka_Help">t.me/Solomka_Help</a>
							</div>
						</div>
					</div>
				</Col>
				<Col sm={12} className="form-hint-text">
					{t('home.contacts.form.need_help')} <br /> 
					{t('home.contacts.form.contact_us')}
				</Col>
				<Col sm={8}>
					<Form 
						id="contact_form"
						onSubmit={handleSubmit(onSubmit)}
					>
					<Alert 
						message={message}
						color={error ? "red" : "green"}
					/>
            {contactFormFields.map((field) => (
               <Field
                  control={control}
                  key={field.key}
									t={t}
                  {...field}
               />
            ))}

						<Button variant="outline-danger" className="archangels-btn" type="submit">
							{loading ? t('home.contacts.form.send_button_loading') : t('home.contacts.form.send_button')}
						</Button>
					</Form>
					<div className="contacts-info-mobile">
						<h3>{t('home.contacts.our_contacts')}</h3>
						<div className="contacts-info__block">
							<div className="">
								Email: <a href="mailto:admin@archangels.in.ua">admin@archangels.in.ua</a>
							</div>
							<div>
								Telegram: <a href="https://t.me/Solomka_Help">t.me/Solomka_Help</a>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		);
};

export default ContactForm;