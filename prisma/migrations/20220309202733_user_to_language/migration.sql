-- CreateTable
CREATE TABLE "User_to_language" (
    "user_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_to_language_user_id_language_id_key" ON "User_to_language"("user_id", "language_id");

-- AddForeignKey
ALTER TABLE "User_to_language" ADD CONSTRAINT "User_to_language_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_to_language" ADD CONSTRAINT "User_to_language_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
