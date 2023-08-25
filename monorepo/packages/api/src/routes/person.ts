import { Router } from 'express';
import {
	deleteItem,
	getItem,
	getItems,
	postItem,
	putItem,
} from '../controllers/person';

const router = Router();

router.get('/', getItem);
router.get('/all', getItems);
router.post('/', postItem);
router.put('/', putItem);
router.delete('/', deleteItem);

export { router };
