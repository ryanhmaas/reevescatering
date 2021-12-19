import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/pro-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';

function ContactForm() {
	const [ formSubmitted, setFormSubmitted ] = useState(false);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const { register, handleSubmit, errors } = useForm();
	library.add(fal);

	const encode = (data) => {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&')
	};

	const onSubmit = async (data) => {
		var formattedData = {
			name: data.name,
			email: data.email,
			phone: data.phone,
			message: data.message
		};

		console.log(formattedData);
		await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact-form',
				...formattedData,
			}),
		})

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
		switch(event.target.name){
			case "name":
				setName(event.target.value);
				break;
			case "phone":
				setPhone(event.target.value);
				break;
			case "email":
				setEmail(event.target.value);
				break;
			case "message":
				setMessage(event.target.value);
				break;
			default:
				console.log(event.target.value);
				break;

		}
	};

	return (
		<div className="contact-section">
			<h2>Want to Learn More?</h2>
			<p>
				We would love the opportunity to sit down and discuss your important event! Contact us today using the
				form, or call Larry at <a href="tel:864-275-0021" className="contact-section__phone">864-275-0021</a>
			</p>
			<form name="contact-form" method="post" onSubmit={handleSubmit(onSubmit)} className="contact-form" data-netlify="true" data-netlify-honeypot="bot-field">
				<div className="u-contact-group contact-group__name">
					<div className="u-form-group">
						<input className="u-form-group__input" value={name} name="name" type="text" onChange={onChange} placeholder="Name" ref={register({ required: true })} />
						<label htmlFor="name">Name</label>
						{errors.name && <span className="field-required">This field is required</span>}
					</div>
					<div className="u-form-group">
						<input className="u-form-group__input" value={phone} name="phone" type="tel" onChange={onChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number" ref={register} />
						<label htmlFor="phone">Phone Number</label>
					</div>
				</div>
				<div className="u-contact-group">
					<div className="u-form-group">
						<input className="u-form-group__input" value={email} name="email" type="email" onChange={onChange}  ref={register({ required: true })} />
						<label htmlFor="email">Email</label>
						{errors.email && <span className="field-required">This field is required</span>}
					</div>
				</div>
				<div className="u-contact-group">
					<div className="u-form-group">
						<textarea className="u-form-group__input" value={message} name="message" onChange={onChange}  ref={register({ required: true })} />
						<label htmlFor="message">Message</label>
						{errors.message && <span className="field-required">This field is required</span>}
					</div>
				</div>
				{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
				<input className="hidden" type="hidden" name="form-name" value="contact" />
				<p hidden className="hidden">
					<label>
						Don’t fill this out: <input name="bot-field" onChange={() => {}} />
					</label>
				</p>
				<button type="submit" disabled={formSubmitted} className="c-btn contact-form__btn">
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
