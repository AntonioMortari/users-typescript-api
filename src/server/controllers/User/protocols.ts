import { Request, Response } from 'express'

export interface IUserController {
    list: (req: Request, res: Response) => Promise<void>
}