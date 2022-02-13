-- CreateTable
CREATE TABLE "task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taskId" TEXT NOT NULL,
    "threshold" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "count" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taskId" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "date" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "hour" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "hash" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "task_taskId_key" ON "task"("taskId");

-- CreateIndex
CREATE INDEX "task_taskId_idx" ON "task"("taskId");

-- CreateIndex
CREATE INDEX "count_taskId_date_month_minute_hour_year_idx" ON "count"("taskId", "date", "month", "minute", "hour", "year");

-- CreateIndex
CREATE UNIQUE INDEX "count_hash_key" ON "count"("hash");
