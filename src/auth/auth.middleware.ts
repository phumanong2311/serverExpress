import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
      if (!authHeader) {
        throw new UnauthorizedException('Token is required');
      }
      try {
        const token = authHeader.split(' ')[1];
        const user = jwt.verify(token, 'warehouse');
        req.currentUser = user
        next();
      } catch (error) {
        throw new UnauthorizedException('Invalid token');
      }
  }
}
