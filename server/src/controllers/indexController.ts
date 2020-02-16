import {Request, Response } from 'express';

class IndexController {
    public Index (req: Request, res: Response) {
        res.send('Hello');
    }
}

export const indexController = new IndexController();