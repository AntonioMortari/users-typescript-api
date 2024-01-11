import { Request, Response } from 'express'

export interface IUserController {
    list: (req: Request, res: Response) => Promise<Response>
    store: (req: Request, res: Response) => Promise<Response>
    destroy: (req: Request, res: Response) => Promise<Response>
}