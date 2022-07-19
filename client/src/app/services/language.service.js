import httpService from "./http.service";

const languageEndpoint = "language/";

const languageService = {
    get: async () => {
        const { data } = await httpService.get(languageEndpoint);
        return data;
    }
};
export default languageService;
