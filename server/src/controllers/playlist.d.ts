
import { Request, Response } from 'express';

declare module './controllers/playlist' {
  export function refreshToken(req: Request, res: Response): void;
  export function grantCode(req: Request, res: Response): void;
}