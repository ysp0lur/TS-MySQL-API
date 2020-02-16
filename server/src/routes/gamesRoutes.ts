import { Router } from 'express';
import gamesController from '../controllers/gamesController';
class GamesRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', gamesController.List);
        this.router.get('/:id', gamesController.GetOne);
        this.router.post('/', gamesController.Create);
        this.router.delete('/:id', gamesController.Delete);
        this.router.put('/:id', gamesController.Update);
    }
}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;