import { writable } from 'svelte/store';
import type { Options } from 'overlayscrollbars';



const overlayScrollbarOptionsValue: Options = {
	paddingAbsolute: false,
	showNativeOverlaidScrollbars: false,
	overflow: {
		x: 'scroll',
		y: 'scroll',
	},
	scrollbars: {
		theme: 'os-theme-dark',
		visibility: 'auto',
		autoHide: 'leave',
		autoHideDelay: 1300,
		autoHideSuspend: false,
		dragScroll: true,
		clickScroll: true,
		pointers: ['mouse', 'touch', 'pen'],
	},
	update: {
		elementEvents: null,
		debounce: null,
		attributes: null,
		ignoreMutation: null,
	}
};

export let overlayScrollbarOptions = writable(overlayScrollbarOptionsValue);
