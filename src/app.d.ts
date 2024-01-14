interface User {
	id: number | null;
	username: string;
	email: string;
	name: string;
	password: string;
	profilePicture: Buffer | null;
	listings: Listing[];
	checkedOutItems: CheckedOutItem[];
	cart: Cart | null;
}

interface Listing {
	id: number;
	name: string;
	description: string | null;
	date: Date | null;
	image: Buffer | null;
	userId: number;
	user: User;
	cart: Cart | null;
	cartId: number | null;
	checkedOutItems: CheckedOutItem[];
}

interface Cart {
	id: number;
	userId: number;
	user: User;
	items: Listing[];
}

interface CheckedOutItem {
	id: number;
	userId: number;
	user: User;
	listingId: number;
	listing: Listing;
}

export { User, Listing, Cart, CheckedOutItem };
