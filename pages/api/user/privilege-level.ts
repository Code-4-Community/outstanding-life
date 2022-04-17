// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import makeRoute from '../../../lib/utils/utils';
import { makeUpdatePrivilegeLevelHandler } from '../../../lib/api/privilegeLevelLogic';
import prisma from '../../../prisma/prisma';
import { getNewsHandler } from '../../../lib/api/newsLogic';
import { getSession } from 'next-auth/react';

/**
 *
 * @swagger
 * /api/user/privilege-level:
 *   put:
 *     description: Updates a user given its email and privilegeLevel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               privilegeLevel:
 *                 type: string
 *             example:
 *               email: "varuniscool@gmail.com"
 *               privilegeLevel: "ADMIN"
 *     responses:
 *       200:
 *         description: The user has been updated to privilegeLevel
 *       400:
 *         description: Received invalid parameters for id and privilege level
 *
 */
export default makeRoute().put(makeUpdatePrivilegeLevelHandler({ prisma, getSession }));
