const fetchFromApi = async (route: string) => {
    return fetch(`https://api.spaceflightnewsapi.net/v3/${route}`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
    });
};

export default fetchFromApi;
