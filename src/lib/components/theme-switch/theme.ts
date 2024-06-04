import { browser } from '$app/environment';
import { type Writable, writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

export function createThemeStore() {
	const { set, subscribe, update }: Writable<Theme> = writable<Theme>('light');

	if (isBrowser()) {
		const theme = localStorage.getItem('theme') as Theme;

		if (theme) {
			set(theme);
		}
	}

	function isBrowser() {
		return browser;
	}

	function setTheme(theme: Theme) {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
		set(theme);
	}

	function toggleTheme() {
		update((theme: Theme) => (theme === 'light' ? 'dark' : 'light'));
	}

	return {
		subscribe,
		set: setTheme,
		toggle: toggleTheme
	};
}
