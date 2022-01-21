import React, { useState } from 'react';

/* Styling */
import { NewsletterContentWrapper, NewsletterForm, SuccessMessage } from './index.styles';

/* Components */
import Button from '../Button';

/* Types */
import type { NewsletterResponseData } from '../../pages/api/newsletter';

function Newsletter() {
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	/* Handle on change */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (value.trim().length) {
			setEmail(value);
		} else {
			setEmail('');
		}
	};

	/* Handle submission for newsletter */
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const sendPayload = { email };
		setIsLoading(true);

		const response = await fetch('/api/newsletter', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Aceept: 'application/json'
			},
			body: JSON.stringify(sendPayload)
		});

		if (!response.ok) {
			console.error('Error subscribing to newsletter');
			setSuccess(false);
		}

		const data: NewsletterResponseData = await response.json();
		if (data.message) {
			setSuccess(true);
		}

		setIsLoading(false);
	};

	return (
		<NewsletterForm onSubmit={handleSubmit}>
			<NewsletterContentWrapper>
				<h3>Hey there. Don&apos;t miss out on our next swag addition!</h3>

				{success && !isLoading ? (
					<SuccessMessage>
						<p>Thank you! Your submission has been received!</p>
					</SuccessMessage>
				) : (
					<>
						<input
							type="email"
							placeholder="Subscribe to our newsletter."
							value={email}
							onChange={handleChange}
							required
						/>

						<Button type="submit" size="lg" outlined css={{ mx: 'auto', my: '2rem' }}>
							{isLoading ? 'Please wait...' : 'Sign me up'}
						</Button>
					</>
				)}
			</NewsletterContentWrapper>
		</NewsletterForm>
	);
}

export default Newsletter;
