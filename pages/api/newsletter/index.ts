import type { NextApiRequest, NextApiResponse } from 'next';

/* Utils */
import { sleep } from '../../../utils/timer';
import { isValidEmail } from '../../../utils/validations';

export type NewsletterResponseData = {
	message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<NewsletterResponseData>) {
	switch (req.method) {
		case 'POST': {
			try {
				const { email } = req.body;

				// if no email is supplied or not a valid email throw an arror
				if (!email || !isValidEmail(email)) {
					res.status(500).json({
						message: 'Invalid email address'
					});
				} else {
					// delay to fake API time
					await sleep(1000);
					res.status(200).json({
						message: 'success'
					});
				}
			} catch (err: any) {
				res.status(500).json({
					message: err.message
				});
			}
			break;
		}
		default: {
			res.setHeader('Allow', 'POST');
			res.status(405).end('Method Not Allowed');
		}
	}
}
