import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const onSubmit = data => console.log(data);

	return (
			<Row className="home-page__contact-form-wrapper content-wrapper">
				<Col sm={4}>
					<h1 className="home-page__title-block-text">
						ЗВ’ЯЗАТИСЯ <br /> 
						З НАМИ
					</h1>
				</Col>
			

				{/* <form onSubmit={handleSubmit(onSubmit)}>
					<input defaultValue="test" {...register("example")} />
					
					<input {...register("exampleRequired", { required: true })} />
					errors will return when field validation fails 
					{errors.exampleRequired && <span>This field is required</span>}
					
					<input type="submit" />
				</form> */}
				<Col sm={8}>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>ПІБ</Form.Label>
							<Form.Control type="text" placeholder="Степан Бандера" isInvalid />
							<Form.Control.Feedback type="invalid">
								Please choose a username.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Телефон</Form.Label>
							<Form.Control type="text" placeholder="+380660097041" required />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>E-mail</Form.Label>
							<Form.Control type="email" placeholder="stepan@bandera.ua" required />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Ваше звернення</Form.Label>
							<Form.Control as="textarea" rows={10} placeholder="Як ми можемо вам допомогти?" required />
						</Form.Group>

						<Button variant="outline-danger" className="archangels-btn" type="submit">
							ВІДПРАВИТИ
						</Button>
					</Form>
				</Col>
			</Row>
		);
};

export default ContactForm;