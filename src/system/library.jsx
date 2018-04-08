export function isDebug() {
	return (process.env.NODE_ENV === 'develop');
}