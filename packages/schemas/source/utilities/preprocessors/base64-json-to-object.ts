// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const base64JsonToObject = (base64: unknown): any => {
	if (typeof base64 === 'string')
		return JSON.parse(Buffer.from(base64, 'base64').toString())
}
