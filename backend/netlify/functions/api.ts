import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverless from 'serverless-http';
import express from 'express';

import { AppModule } from '../../src/app.module';

let cachedHandler: any;

async function createHandler() {
  const expressApp = express();

  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    process.env.FRONTEND_URL,
  ].filter(Boolean);

  nestApp.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });

  await nestApp.init();

  return serverless(expressApp);
}

export const handler = async (event: any, context: any) => {
  if (!cachedHandler) {
    cachedHandler = await createHandler();
  }

  return cachedHandler(event, context);
};
