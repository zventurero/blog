export interface ShowcaseItem {
	name: string;
	href: string;
	stack: string;
	badge?: string;
	desc: string;
}

// Empty for now — the Showcase tab hides itself while this list is empty.
// Add entries later to show off projects, writing, or experiments.
export const showcase: ShowcaseItem[] = [];
