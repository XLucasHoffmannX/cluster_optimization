import express from 'express';
import { Cluster } from '../../app/controllers/clusterCtrl';

const router = express.Router();

router.get('/', Cluster)

export default router;