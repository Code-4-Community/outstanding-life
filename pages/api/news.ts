// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import makeRoute from '../../lib/utils/utils';
import { getNewsHandler, postNewsHandler } from '../../lib/api/newsLogic';

export default makeRoute().get(getNewsHandler).post(postNewsHandler);
