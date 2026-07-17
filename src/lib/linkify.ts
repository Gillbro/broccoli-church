/** テキスト内の URL をクリック可能なリンクに変換する */
export function linkify(text: string): string {
	const escaped = text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');

	return escaped.replace(/(https?:\/\/[^\s<]+)/g, (url) => {
		const trimmed = url.replace(/[.,;:!?)]+$/, '');
		const trailing = url.slice(trimmed.length);
		return `<a href="${trimmed}" target="_blank" rel="noopener noreferrer">${trimmed}</a>${trailing}`;
	});
}
