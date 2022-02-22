// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import makeRoute from '../../lib/utils/utils';
import { getNewsHandler, postNewsHandler } from '../../lib/api/newsLogic';

/**
 * @swagger
 * /api/news:
 *   get:
 *     description: Returns the news
 *     responses:
 *       200:
 *         description: Successful news retrieval
 *   post:
 *     description: Creates valid news
 *     responses:
 *       201:
 *         description: Successful news creation
 */
export default makeRoute().get(getNewsHandler).post(postNewsHandler);
