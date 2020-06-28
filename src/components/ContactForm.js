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

		// submit form and then change state so icon change
		setFormSubmitted(true);
	};

	const onChange = (event) => {
		if (event.target.value){
			event.target.classList.add('-active');
		}
		else {
			event.target.classList.remove('-active');
		}
	};

	return (
		<div className="contact-section">
			<h2>Want to Learn More?</h2>
			<p>
				We would love the opportunity to sit down and discuss your important event! Contact us today using the
				form, or call Larry at <a href="tel:864-275-0021" className="contact-section__phone">864-275-0021</a>
			</p>
			<form onSubmit={handleSubmit(onSubmit)} className="contact-form">
				<div className="u-contact-group contact-group__name">
					<div className="u-form-group">
						<input className="u-form-group__input" name="nameRequired" type="text" onChange={onChange} placeholder="Name" ref={register({ required: true })} />
						<label for="nameRequired">Name</label>
						{errors.nameRequired && <span className="field-required">This field is required</span>}
					</div>
					<div className="u-form-group">
						<input className="u-form-group__input" name="phoneNumber" type="tel" onChange={onChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number" ref={register} />
						<label for="phoneNumber">Phone Number <span>(555-555-5555)</span></label>
					</div>
				</div>
				<div className="u-contact-group">
					<div className="u-form-group">
						<input className="u-form-group__input" name="emailRequired" type="email" onChange={onChange}  ref={register({ required: true })} />
						<label for="emailRequired">Email <span>(name@email.com)</span></label>
						{errors.emailRequired && <span className="field-required">This field is required</span>}
					</div>
				</div>
				<div className="u-contact-group">
					<div className="u-form-group">
						<textarea className="u-form-group__input" name="messageRequired" onChange={onChange}  ref={register({ required: true })} />
						<label for="messageRequired">Message</label>
						{errors.messageRequired && <span className="field-required">This field is required</span>}
					</div>
				</div>
				<button type="submit" className="c-btn contact-form__btn">
					{formSubmitted && (
						<>
							Message Sent! <FontAwesomeIcon icon={[ 'fal', 'check' ]} />
						</>
					)}
					{!formSubmitted && (
						<>
							Send Message <FontAwesomeIcon icon={faPaperPlane} />
						</>
					)}
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
