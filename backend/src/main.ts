import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:4200',
        methods: 'GET,PUT,POST,DELETE,OPTIONS',
        credentials: true,
        allowedHeaders: 'Content-Type, Accept',
    });

    // app.use((req: Request, res: Response, next: NextFunction) => {
    //     setTimeout(next, 2 * 1000);
    // })

    await app.listen(3000);
}
bootstrap();
