"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const serverless_http_1 = __importDefault(require("serverless-http"));
const express_1 = __importDefault(require("express"));
const app_module_1 = require("../../src/app.module");
let cachedHandler;
async function createHandler() {
    const expressApp = (0, express_1.default)();
    const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
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
    return (0, serverless_http_1.default)(expressApp, {
        basePath: '/api',
    });
}
const handler = async (event, context) => {
    if (!cachedHandler) {
        cachedHandler = await createHandler();
    }
    return cachedHandler(event, context);
};
exports.handler = handler;
//# sourceMappingURL=api.js.map