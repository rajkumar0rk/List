import { Router } from 'express'
import { addMobiles, getMobile, updateMobile, deleteMobile } from '../controllers/mobile.controller';

const route = Router();


route.post('/', addMobiles)
route.get('/', getMobile)
route.put('/:id', updateMobile)
route.delete('/:id', deleteMobile)

export default route;