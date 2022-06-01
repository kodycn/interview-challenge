import express from 'express';

import {
  createSwatch,
  deleteSwatch,
  getSwatches,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getSwatches);
router.post('/', createSwatch);
router.delete('/:id', deleteSwatch);

export default router;
