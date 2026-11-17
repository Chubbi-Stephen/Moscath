/**
 * MOSCATH APARTMENTS — Site Data
 * ================================
 * Edit this file to update all site content without touching the HTML.
 *
 * HOW TO CHANGE THE WHATSAPP NUMBER:
 *   Update `WHATSAPP_NUMBER` below. Use international format, digits only
 *   (no +, no spaces, no dashes). Example: "2348106215887"
 *
 * HOW TO EDIT APARTMENTS:
 *   Add, remove, or modify objects in the `apartments` array.
 *   Each object fields:
 *     id        – unique slug (used for URLs/anchors)
 *     name      – display name
 *     bedrooms  – number of bedrooms
 *     features  – short bullet array (max 4 for layout)
 *     images    – array of image paths (first is the card cover)
 *     desc      – short paragraph for the apartment detail
 */

const WHATSAPP_NUMBER = "2348106215887"; // TODO: confirm second number if preferred (+2348112270316 also available)

const SITE = {
	name: "Moscath Garden Apartments",
	tagline: "A place that feels like yours.",
	subTagline: "Shortlet apartments in Lekki, Lagos.",
	address: "11 Murtala Eletu Way, Osapa London, Lekki, Lagos",
	phone: "+234 810 621 5887",
	phone2: "+234 811 227 0316",
	email: "moscathgardenapartments@gmail.com",
	instagram: "https://instagram.com/moscathgarden",
	instagramHandle: "@moscathgarden",
	portfolioUrl: "https://devchubbiportfolio.netlify.app/",
	mapEmbedUrl:
		"https://maps.google.com/maps?q=11+Murtala+Eletu+Way+Osapa+London+Lekki+Lagos&output=embed",
};

const ABOUT = {
	heading: "More than a stay.",
	body: `Moscath Garden Apartments specialises in short-let living for guests who
    expect more. We offer thoughtfully furnished spaces in the heart of Lekki,
    where professional service meets genuine warmth. Whether you are here for
    a night, a week, or longer, we make sure you leave with fond memories.`,
};

// TODO: Replace placeholder names and details with your actual apartment listings.
// TODO: Replace placeholder images (img/portfolio/XX.jpg) with actual room photos.
const apartments = [
	{
		id: "one-bedroom",
		name: "The One-Bedroom",
		bedrooms: 1,
		features: ["Separate bedroom", "Living area", "Kitchenette", "Smart TV"],
		images: [
			"img/portfolio/01.jpg", // TODO: Replace with actual photo
			"img/portfolio/02.jpg", // TODO: Replace with actual photo
			"img/portfolio/03.jpg", // TODO: Replace with actual photo
		],
		desc: "Space to breathe. A separate living area, a quiet bedroom, and a home kitchen, designed for the guest who values their own pace.",
	},
	{
		id: "two-bedroom",
		name: "The Two-Bedroom",
		bedrooms: 2,
		price: "₦85,000", // TODO: Confirm nightly price
		priceNote: "per night",
		features: ["Two bedrooms", "Full kitchen", "Dining area", "Smart TV"],
		images: [
			"img/portfolio/04.jpg", // TODO: Replace with actual photo
			"img/portfolio/05.jpg", // TODO: Replace with actual photo
			"img/portfolio/06.jpg", // TODO: Replace with actual photo
		],
		desc: "Generous proportions for families or small groups. Two comfortable bedrooms, a full kitchen, and a living space that invites you to settle in.",
	},
	{
		id: "four-bedroom-duplex",
		name: "The Four-Bedroom Duplex",
		bedrooms: 4,
		features: ["Four bedrooms", "Two floors", "Full kitchen", "Private lounge"],
		images: [
			"img/portfolio/07.jpg", // TODO: Replace with actual photo
			"img/portfolio/08.jpg", // TODO: Replace with actual photo
			"img/portfolio/09.jpg", // TODO: Replace with actual photo
		],
		desc: "Our largest residence. A two-floor duplex with four bedrooms, generous living spaces, and room for the whole family to spread out.",
	},
];

const amenities = [
	{ icon: "wifi", label: "High-speed Wi-Fi" },
	{ icon: "zap", label: "24/7 Power supply" },
	{ icon: "shield", label: "24/7 Security" },
	{ icon: "tv", label: "Smart TV & streaming" },
	{ icon: "car", label: "Free onsite parking" },
	{ icon: "coffee", label: "Fully equipped kitchen" },
	{ icon: "wind", label: "Air conditioning" },
	{ icon: "user-check", label: "Housekeeping" },
	{ icon: "map-pin", label: "Airport pickup available" },
	{ icon: "home", label: "Private lounge" },
];

const testimonials = [
	{
		quote:
			"I really enjoyed booking with Moscath. The quality of service was excellent. What stood out most was the communication — I was completely satisfied.",
		author: "Taiye Hakeem",
	},
	{
		quote:
			"Booking with Moscath was a game-changer for our vacation. Their selection of beautifully maintained homes made finding the perfect short-term rental effortless. From the first enquiry to check-out, the team was responsive and accommodating.",
		author: "David Ehis",
	},
	{
		quote:
			"What sets Moscath apart is their commitment to the guest experience. They went above and beyond to ensure our stay was seamless and memorable.",
		author: "Clara Okonkwo",
	},
];

// Gallery images — sourced from existing portfolio folder.
// TODO: Replace with your best actual room photos.
const galleryImages = [
	{ src: "img/portfolio/01.jpeg", alt: "Moscath apartment interior" },
	{ src: "img/portfolio/02.jpeg", alt: "Moscath apartment living area" },
	{ src: "img/portfolio/03.jpeg", alt: "Moscath apartment bedroom" },
	{ src: "img/portfolio/04.jpeg", alt: "Moscath apartment dining area" },
	{ src: "img/portfolio/05.jpeg", alt: "Moscath apartment kitchen" },
	{ src: "img/portfolio/06.jpeg", alt: "Moscath apartment detail" },
	// { src: "img/portfolio/07.jpg", alt: "Moscath apartment lounge" },
	// { src: "img/portfolio/08.jpg", alt: "Moscath apartment en-suite" },
	// { src: "img/portfolio/09.jpg", alt: "Moscath garden exterior" },
];

const nearbyHighlights = [
	"Lekki Phase 1 Shopping Mall — 5 min",
	"Victoria Island business district — 15 min",
	"Tarkwa Bay beach — 20 min",
	"Lekki Conservation Centre — 10 min",
	"Eko Atlantic City — 15 min",
];
