import httpService from "./http.service";
const notesEndpoint = "notes/";

const notesService = {
    createNote: async (payload) => {
        const { data } = await httpService.post(notesEndpoint, payload);
        return data;
    },
    getNotes: async (userId) => {
        const { data } = await httpService.get(notesEndpoint, {
            params: {
                orderBy: "userId",
                equalTo: `${userId}`
            }
        });
        return data;
    },
    removeNote: async (noteId) => {
        const { data } = await httpService.delete(notesEndpoint + noteId);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            notesEndpoint + payload._id,
            payload
        );
        return data;
    }
};
export default notesService;
