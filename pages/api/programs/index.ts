// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import makeRoute from '../../../lib/utils/utils';
import { getAllProgramsHandler, postProgramHandler } from '../../../lib/api/programsLogic';

//TODO: eventdateisostring needs a start and end time
/**
 * @swagger
 * /api/programs:
 *   get:
 *     description: Returns the programs headline
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
 *                     location:
 *                       type: String
 *                       example: 123 AppletonSt. Room 34
 *                     eventDate:
 *                       type: dateTime
 *                       example: Jan-09-2022
 *                     pictureS3Url:
 *                       type: String
 *                       example: https://s3.amazonaws.com/bucketname/foldername/imagename.jpg
 *   post:
 *     description: Creates valid programs headline
 *     parameters:
 *       - name: title
 *         required: true
 *         description: The title of the programs headline.
 *         schema:
 *              type : string
 *       - name: content
 *         required: true
 *         description: The content of the programs headline.
 *         schema:
 *              type : string
 *       - name: location
 *         required: true
 *         description: The location of the event.
 *         schema:
 *              type : string
 *      - name: base64EncodedImage
 *         required: true
 *         description: The image for the event as a base64 encoded string.
 *         schema:
 *              type : string
 *      - name: eventDateISOString
 *         required: true
 *         description: The date of the event as an ISOString
 *         schema:
 *              type : string
 *     responses:
 *       201:
 *         description: OK
 */
export default makeRoute().get(getAllProgramsHandler).post(postProgramHandler);

//todo:update and delete
