// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import makeRoute from '../../../../lib/utils/utils';
import { makeUpdatePrivilegeLevelHandler } from '../../../../lib/api/privilegeLevelLogic';
import prisma from '../../../../prisma/prisma';

/**
 * TODO: update swagger
 * @swagger
 * /api/user/:email/privilegeLevel:
 *   put:
 *     description: Updates a user
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *              schema:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       format: int64
 *                       example: 4
 *                     title:
 *                       type: string
 *                       example: Fun Event
 *                     content:
 *                       type: string
 *                       example: An event is happening in the common area!
 *                     createdAt:
 *                       type: dateTime
 *                       example: Jan-08-2022
 *   post:
 *     description: Creates valid news headline
 *     parameters:
 *       - name: title
 *         required: true
 *         description: The title of the news headline.
 *         schema:
 *              type : string
 *       - name: content
 *         required: true
 *         description: The content of the news headline.
 *         schema:
 *              type : string
 *     responses:
 *       201:
 *         description: OK
 */
export default makeRoute().put(makeUpdatePrivilegeLevelHandler({ prisma }));
