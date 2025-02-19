import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AccountModule } from './account/account.module';
import { EmployeeModule } from './employee/employee.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PayrollModule } from './payroll/payroll.module';

@Module({
  imports: [AccountModule, EmployeeModule, AttendanceModule, PayrollModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
