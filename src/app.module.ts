import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'hr_backend_nest',
      entities: [User],
      synchronize: true, // ⚠️ Use false in production and run migrations instead
    }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, prettier/prettier
    TypeOrmModule.forFeature([User]),
    // eslint-disable-next-line prettier/prettier
    AuthModule,
    // eslint-disable-next-line prettier/prettier
    UserModule,

  ],

})
// eslint-disable-next-line prettier/prettier
export class AppModule {}
