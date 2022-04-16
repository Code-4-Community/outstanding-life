// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import makeRoute from '../../../../lib/utils/utils';
import { makeUpdatePrivilegeLevelHandler } from '../../../../lib/api/privilegeLevelLogic';
import prisma from '../../../../prisma/prisma';

/**
 *
 * @swagger
 * /api/user/{email}/privilegeLevel:
 *   put:
 *     description: Updates a user given its email and privilegeLevel
 *     parameters:
 *       - name: email
 *         in: path
 *         description: the user to update
 *         schema:
 *           type : string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               privilegeLevel:
 *                 type: string
 *     responses:
 *       200:
 *         description: The user has been updated to privilegeLevel
 *       400:
 *         description: Received invalid parameters for id and privilege level
 *
 */
export default makeRoute().put(makeUpdatePrivilegeLevelHandler({ prisma }));
