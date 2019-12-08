let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken !== null) {
            return accessToken;
        } else {
            const currUrl = window.location.href;
            const token = currUrl.match(/access_token=([^&]*)/);
            const exp = currUrl.match(/expires_in=([^&]*)/);
            if (token) {
                accessToken = token;
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
            }
        }
    }
}

export default Spotify;