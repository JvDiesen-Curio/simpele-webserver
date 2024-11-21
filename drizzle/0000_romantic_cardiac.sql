CREATE TABLE `users` (
	`id` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`user_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_user_name_unique` UNIQUE(`user_name`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
