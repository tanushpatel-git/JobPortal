const API_KEY = "8b5acee8d6c5598f00797880594b4912";
const API_ID = "a353d2ff"
export const fetchJobs = async (q) => {
    try {
        let res = await fetch(`https://api.adzuna.com/v1/api/jobs/in/search/1/?app_id=${API_ID}&app_key=${API_KEY}&what=${q}&results_per_page=25`);
        let jobs = await res.json();
        if (Array.isArray(jobs)) {
            return [];
        }else{
            return jobs.results;
        }
    } catch (err) {
        console.error(err);
        return [];
    }
};