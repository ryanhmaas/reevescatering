import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/pro-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';

function ContactForm() {
	const [ formSubmitted, setFormSubmitted ] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	library.add(fal);

	const onSubmit = (data) => {
		var formattedData = {
			name: data.nameRequired,
			email: data.emailRequired,
			phone: data.phone,
			message: data.messageRequired
		};

		console.log(formattedData);

		// submit form and then change state so icon change
		setFormSubmitted(true);
	};

	return (
		<div className="contact-section">
			<h2>Want to Learn More?</h2>
			<p>
				We would love the opportunity to sit down and discuss your important event! Contact us today using the
				form, or call Larry at <span className="contact-section__phone">864.275.0021</span>
			</p>
			<form onSubmit={handleSubmit(onSubmit)} className="contact-form">
				<div className="contact-group contact-group__name">
					<div className="form-group">
						<label for="nameRequired">Name</label>
						<input name="nameRequired" placeholder="Name" ref={register({ required: true })} />
						{errors.nameRequired && <span className="field-required">This field is required</span>}
					</div>
					<div className="form-group">
						<label for="phoneNumber">Phone Number</label>
						<input name="phoneNumber" placeholder="Phone Number" ref={register} />
					</div>
				</div>
				<div className="contact-group">
					<div className="form-group">
						<label for="emailRequired">Email</label>
						<input name="emailRequired" ref={register({ required: true })} />
						{errors.emailRequired && <span className="field-required">This field is required</span>}
					</div>
				</div>
				<div className="contact-group">
					<div className="form-group">
						<label for="messageRequired">Message</label>
						<textarea name="messageRequired" ref={register({ required: true })} />
						{errors.messageRequired && <span className="field-required">This field is required</span>}
					</div>
				</div>
				<button type="submit" className="c-btn contact-form__btn">
					{formSubmitted && (
						<span className="btn-message">
							Message Sent! <FontAwesomeIcon icon={[ 'fal', 'check' ]} />
						</span>
					)}
					{!formSubmitted && (
						<span className="btn-message">
							Send Message <FontAwesomeIcon icon={faPaperPlane} />
						</span>
					)}
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
