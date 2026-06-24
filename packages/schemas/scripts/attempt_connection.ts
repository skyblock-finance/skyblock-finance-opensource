async function attemptFunctionCall<T>(
	f: (...args: any[]) => Promise<T>,
	fargs?: any[],
): Promise<T> {
	if (fargs === undefined) {
		return f()
	}
	return f(...fargs)
}

export async function attemptApiConnection<T>(
	f: () => Promise<T>,
	fargs: any[],
	g: () => Promise<T>,
	gargs: any[],
): Promise<T> {
	try {
		return await attemptFunctionCall(f, fargs)
	} catch (error) {
		if (error instanceof Error && error.name === 'ConnectionError') {
			console.log('Something is wrong with my internet again ;-;')
			return attemptFunctionCall(g, gargs)
		} else {
			throw error
		}
	}
}
