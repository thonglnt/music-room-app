import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ roomId: 'abc123' });
});

export default router;
