const STORAGE_KEY = 'theme';

const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');

function readStoredTheme() {
	try {
		return localStorage.getItem(STORAGE_KEY);
	} catch {
		return null;
	}
}

export function getTheme() {
	const stored = readStoredTheme();
	if (stored === 'dark' || stored === 'light') {
		return stored;
	}
	return darkMedia.matches ? 'dark' : 'light';
}

export function applyTheme(theme) {
	document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function toggleTheme() {
	const next = getTheme() === 'dark' ? 'light' : 'dark';
	try {
		localStorage.setItem(STORAGE_KEY, next);
	} catch {
		// Persistence unavailable (private mode, sandboxed context); theme still applies for this session.
	}
	applyTheme(next);
	return next;
}

export function initTheme() {
	applyTheme(getTheme());
	darkMedia.addEventListener('change', (event) => {
		if (readStoredTheme() === null) {
			applyTheme(event.matches ? 'dark' : 'light');
		}
	});
}
