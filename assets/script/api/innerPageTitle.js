
const getRequest = (categoryId) => {
    return {
        url: `${process.env.NEXT_PUBLIC_DATA_URL_BASE}/innerPageTitle/${categoryId}`,
        obj: {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "text/plain"
            }
        }
    };
};

const getFetch = (categoryId) => {
    const request = getRequest(categoryId);

    return fetch(request.url, request.obj).then((response) => {
        return response.json();
    }).catch((err) => {
        throw err;
    });
};

const app = {
    getRequest: getRequest,
    getFetch: getFetch
};

export default app;