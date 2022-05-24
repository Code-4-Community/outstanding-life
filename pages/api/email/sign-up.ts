// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUpForMailingList } from '../../../lib/api/emailLogic';
import makeRoute from '../../../lib/utils/utils';

/**
 * @swagger
 * /api/email/sign-up:
 *   post:
 *     description: Send email to partner to confirm sign-up
 *     parameters:
 *       - name: firstName
 *         required: true
 *         description: First name of individual.
 *         schema:
 *              type : string
 *       - name: lastName
 *         required: true
 *         description: Last name of individual.
 *         schema:
 *              type : string
 *       - name: email
 *         required: true
 *         description: Email of individual.
 *         schema:
 *              type : string
 *       - name: zipCode
 *         required: true
 *         description: Zip code of individual.
 *         schema:
 *              type : string
 *     responses:
 *       201:
 *         description: OK
 */
export default makeRoute().post(signUpForMailingList);
