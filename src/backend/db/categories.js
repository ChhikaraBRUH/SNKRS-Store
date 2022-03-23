import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Air Force 1",
		description: "Air Force 1's are the classic Nike Shoes.",
	},
	{
		_id: uuid(),
		categoryName: "Running",
		description: "We have an amazing collection of Running Shoes.",
	},
	{
		_id: uuid(),
		categoryName: "Skateboarding",
		description: "Love Skateboarding? We got you covered!",
	},
];
