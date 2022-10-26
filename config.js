// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Ryan',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '9d3218868eb6f3eae18ee62b3a55afdb', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'f', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '42.548',
	defaultLongitude: '-83.369',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Notion',
			icon: 'bookmark',
			link: 'https://notion.so/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://gmail.com/',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '4',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://twitch.com',
		},
		{
			id: '5',
			name: 'Ally',
			icon: 'piggy-bank',
			link: 'https://ally.com',
		},
		{
			id: '6',
			name: 'Godot',
			icon: 'code',
			link: 'https://docs.godotengine.org/en/stable/',
		},
		{
			id: '7',
			name: 'Proton',
			icon: 'mail',
			link: 'https://mail.proton.me/',
		},
		{
			id: '8',
			name: 'Fidelity',
			icon: 'landmark',
			link: 'https://www.fidelity.com/',
		},
		{
			id: '9',
			name: 'NPR',
			icon: 'radio',
			link: 'https://www.npr.org/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'play',
			id: '1',
			links: [
				{
					name: 'HBOMax',
					link: 'https://www.hbomax.com/',
				},
				{
					name: 'Netflix',
					link: 'https://www.netflix.com/browse',
				},
				{
					name: 'Disney Plus',
					link: 'https://www.disneyplus.com/home',
				},
				{
					name: 'YouTube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Apple Music',
					link: 'https://music.apple.com/',
				},
				{
					name: 'Hulu',
					link: 'https://www.hulu.com/hub/home',
				},
				{
					name: 'Prime Video',
					link: 'https://www.amazon.com/hp/video/offers/intercept/ref=atv_hm_hom_redirect?_encoding=UTF8&dvah=intercept&node=2676882011',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Novel Factory',
					link: 'https://nf3.novel-factory.com/',
				},
				{
					name: 'Wavemaker',
					link: 'https://wavemaker.cards/',
				},
				{
					name: 'Keybr',
					link: 'https://www.keybr.com/',
				},
				{
					name: 'Monkeytype',
					link: 'https://monkeytype.com/',
				},
				{
					name: 'TypeRacer',
					link: 'https://play.typeracer.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
