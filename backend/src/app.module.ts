import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { CustomOrdersModule } from './custom-orders/custom-orders.module';
import { ProductsModule } from './products/products.module';
import { TryOnModule } from './tryon/tryon.module';
import { CustomersModule } from './customers/customers.module';
import { StallsModule } from './stalls/stalls.module';
import { CarouselModule } from './carousel/carousel.module';
import { StyleStoriesModule } from './style-stories/style-stories.module';
import { LargeCollectionModule } from './large-collections/large-collection.module';

import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,
    AuthModule,
    AdminModule,
    CustomOrdersModule,
    ProductsModule,
    TryOnModule,
    CustomersModule,
    StallsModule,
    CarouselModule,
    StyleStoriesModule,
    LargeCollectionModule,
    ContactModule,
  ],

  controllers: [AppController, OrdersController],

  providers: [AppService, OrdersService],
})
export class AppModule {}
