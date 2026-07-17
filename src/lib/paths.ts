/** GitHub Pages など base 付きデプロイ向けにパスを解決する */
export function withBase(path: string): string {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}

	const base = import.meta.env.BASE_URL;
	const normalized = path.startsWith('/') ? path.slice(1) : path;
	const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
	return `${baseWithSlash}${normalized}`;
}

/** OG タグなどで使う絶対 URL を生成する */
export function absoluteUrl(path: string, site: string | URL): string {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}

	return new URL(withBase(path), site).href;
}
