const { VUE_APP_DEFAULT_AUTHOR_HOST, VUE_APP_DEFAULT_PUBLISH_HOST } = process.env;

export const getAuthorHost = () => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("authorHost")) {
		return searchParams.get("authorHost");
	} else {
		return VUE_APP_DEFAULT_AUTHOR_HOST;
	}
}

export const getPublishHost = () => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("publishHost")) {
		return searchParams.get("publishHost");
	} else {
		return VUE_APP_DEFAULT_PUBLISH_HOST;
	}
}
