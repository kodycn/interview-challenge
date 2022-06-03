import express from 'express';

import {
  createSwatch,
  deleteSwatch,
  getRandomSwatch,
  getSwatches,
  getSwatch,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getSwatches);
router.get('/random', getRandomSwatch);
router.get('/:id', getSwatch);
router.post('/', createSwatch);
router.delete('/:id', deleteSwatch);

export default router;
