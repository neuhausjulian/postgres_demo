-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
	"languages_by_name" TEXT[],
	"languages_by_id" INT[],
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_to_language" (
    "user_id" INT NOT NULL,
    "language_id" INT NOT NULL,
    CONSTRAINT "User_to_language_pkey" PRIMARY KEY ("user_id", "language_id")
);

-- AddForeignKey
ALTER TABLE "User_to_language" ADD CONSTRAINT "User_to_language_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "User_to_language" ADD CONSTRAINT "User_to_language_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;