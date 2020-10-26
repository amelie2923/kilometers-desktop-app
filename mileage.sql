--
-- Fichier généré par SQLiteStudio v3.2.1 sur lun. oct. 26 19:40:13 2020
--
-- Encodage texte utilisé : UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table : cars
CREATE TABLE "cars" (
	"id"	INTEGER,
	"brand"	VARCHAR(255) NOT NULL,
	"model"	VARCHAR(255) NOT NULL,
	"power"	INTEGER NOT NULL,
	"year"	INTEGER NOT NULL,
	"registration"	VARCHAR(255) NOT NULL,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

-- Table : entities
CREATE TABLE `entities` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255) NOT NULL, `type` TEXT NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Table : journeys
CREATE TABLE "journeys" (
	"id"	INTEGER,
	"date"	DATE NOT NULL,
	"journeyStart"	VARCHAR(255) NOT NULL,
	"journeyEnd"	VARCHAR(255) NOT NULL,
	"kilometersStart"	FLOAT NOT NULL,
	"kilometersEnd"	FLOAT NOT NULL,
	"distance"	FLOAT NOT NULL,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	"object_journey"	TEXT,
	"userId"	INTEGER,
	"entityId"	INTEGER,
	"carId"	INTEGER,
	FOREIGN KEY("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE,
	FOREIGN KEY("carId") REFERENCES "cars"("id") ON DELETE SET NULL ON UPDATE CASCADE,
	FOREIGN KEY("entityId") REFERENCES "entities"("id") ON DELETE SET NULL ON UPDATE CASCADE,
	PRIMARY KEY("id" AUTOINCREMENT)
);

-- Table : objectJourneys
CREATE TABLE objectJourneys (id INTEGER PRIMARY KEY AUTOINCREMENT, label TEXT (255));

-- Table : sheets
CREATE TABLE `sheets` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `totalKilometers` FLOAT NOT NULL, `compensation` FLOAT NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Table : userEntities
CREATE TABLE "userEntities" (
	"id"	INTEGER,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	"userId"	INTEGER,
	"entityId"	INTEGER,
	UNIQUE("userId","entityId"),
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("entityId") REFERENCES "entities"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Table : users
CREATE TABLE "users" (
	"id"	INTEGER,
	"email"	VARCHAR(255) NOT NULL UNIQUE,
	"password"	TEXT NOT NULL,
	"firstname"	VARCHAR(255) NOT NULL,
	"lastname"	VARCHAR(255) NOT NULL,
	"role"	TEXT NOT NULL DEFAULT 'user',
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO users (id, email, password, firstname, lastname, role, createdAt, updatedAt) VALUES (1, 'amelie', 'R,k8+74pC', 'salaun', 'amelie', 'admin', '2020-10-01 09:42:18.267 +00:00', '2020-10-01 09:42:18.267 +00:00');

-- Table : usersCars
CREATE TABLE "usersCars" (
	"id"	INTEGER,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	"userId"	INTEGER,
	"vehicleId"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	UNIQUE("userId","vehicleId"),
	FOREIGN KEY("userId") REFERENCES "usersCars"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY("vehicleId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
