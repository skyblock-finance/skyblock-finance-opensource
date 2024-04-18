export const toDate = (timestamp: unknown) => {
	if (typeof timestamp === 'number') return new Date(timestamp)
}
