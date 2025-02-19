-- AlterTable
ALTER TABLE "Attendance" ALTER COLUMN "isAttended" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Payroll" (
    "id" TEXT NOT NULL,
    "workingHours" INTEGER NOT NULL,
    "salaryPerHour" DOUBLE PRECISION NOT NULL,
    "grossSalary" DOUBLE PRECISION NOT NULL,
    "totalSalary" DOUBLE PRECISION NOT NULL,
    "epfEtf" DOUBLE PRECISION NOT NULL,
    "bankAccount" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payroll_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payroll_id_key" ON "Payroll"("id");
