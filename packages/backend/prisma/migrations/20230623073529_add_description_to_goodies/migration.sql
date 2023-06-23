/*
  Warnings:

  - Added the required column `description` to the `shoodies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shoodies" ADD COLUMN     "description" VARCHAR NOT NULL;
