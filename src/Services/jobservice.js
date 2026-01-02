const urlOfApi = "https://jsearch.p.rapidapi.com";

export const fetchJobs = async (q = "developer") => {
    try {
        const res = await fetch(
            `${urlOfApi}/search?query=${(q)}&location=India&page=1&num_pages=1`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "jsearch.p.rapidapi.com",
                    "x-rapidapi-key": "Y2217e47caamsh698b9f4ec151b28p12f1e5jsne0f03be27e69"
                }
            }
        );

        const jobs = await res.json();
        console.log(jobs);
    } catch (err) {
        console.error(err);
    }
};