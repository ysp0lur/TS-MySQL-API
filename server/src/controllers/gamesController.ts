import {Request, Response } from 'express';
import pool from '../database';
class GamesController {

    public async List (req: Request, res: Response) {
        const response = await pool.query('SELECT * FROM ejes');
        res.json(response);
    }
    public async GetOne (req: Request, res: Response) {
        const response = await pool.query('SELECT * FROM ejes where id=?',[req.params.id]);
        res.json(response);
    }
    public async Create (req: Request, res: Response) {
        await pool.query('INSERT INTO ejes set ?',[req.body]);
        console.log(req.body);
        res.json({message: 'Game Saved'});
    }
    public async Delete (req: Request, res: Response) {
        await pool.query('DELETE FROM ejes WHERE id = ?',[req.params.id]);
        res.json({message:'Game Deleted Succesfuly'});
    }
    public async Update (req: Request, res: Response) {
        await pool.query('UPDATE ejes SET ? WHERE id = ?',[req.body ,req.params.id])
        res.json({message:'Game Updates Succesfuly'});
    }
}

const gamesController = new GamesController();
export default gamesController;