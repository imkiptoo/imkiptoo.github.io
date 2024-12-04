interface NavItem {
	title: string; // Display title
	link: string; // Anchor or URL
	subNav?: NavItem[]; // Optional sub_navigation items
	isExternal?: boolean; // Optional flag for external links
}

class Navigation {
	navItems: NavItem[] = [];

	constructor(navItems: NavItem[]) {
		this.navItems = navItems;
	}

	// Example: Method to get all top_level navigation titles
	getTopLevelTitles(): string[] {
		return this.navItems.map((item) => item.title);
	}

	// Example: Method to find a navigation item by title
	findNavItemByTitle(title: string): NavItem | undefined {
		return this.navItems.find((item) => item.title === title);
	}

	// Example: Method to add a new navigation item
	addNavItem(newItem: NavItem): void {
		this.navItems.push(newItem);
	}
}

const navItems: NavItem[] = [
	{ title: 'Home', link: 'home' },
	{ title: 'About', link: 'about' },
	{
		title: 'Education',
		link: 'education',
		subNav: [
			{ title: 'Masters', link: 'education_masters' },
			{ title: 'Bachelors', link: 'education_bachelors' }
		]
	},
	{
		title: 'Work Experience',
		link: 'work',
		subNav: [
			{ title: '2019 - 2021', link: 'work_19to21' },
			{ title: '2021 - 2024', link: 'work_21to24' }
		]
	},
	{
		title: 'Projects',
		link: 'projects',
		subNav: [
			{ title: 'Multi-Factor Authentication System', link: 'projects_mfa' },
			{ title: 'NDIS Document Management System', link: 'projects_ndis_ds' },
			{ title: 'Supply Chain ERP System', link: 'projects_supply_chain_erp' },
			{ title: 'Database Synchronization Software', link: 'projects_cdss' },
			{ title: 'Diary Management System', link: 'projects_diary_management_system' }
		]
	},
	{
		title: 'Skills',
		link: 'skills',
		subNav: [
			{ title: 'Back-End SE', link: 'skills_back_end' },
			{ title: 'Front-End SE', link: 'skills_front_end' },
			{ title: 'Databases', link: 'skills_database' },
			{ title: 'DevOps', link: 'skills_devops' }
		]
	},
	{ title: 'Languages', link: 'languages' },
	{ title: 'Volunteering', link: 'volunteering' }
];

export const navigation = new Navigation(navItems);
