import httpService from "./http.service";
const notesEndpoint = "notes/";

const notesService = {
    createNote: async (payload) => {
        const { data } = await httpService.put(
            notesEndpoint + payload._id,
            payload
        );
        return data;
    },
    getNotes: async (pageId) => {
        const { data } = await httpService.get(notesEndpoint, {
            params: {
                orderBy: '"pageId"',
                equalTo: `"${pageId}"`
            }
        });
        return data;
    },
    removeNote: async (noteId) => {
        const { data } = await httpService.delete(notesEndpoint + noteId);
        return data;
    }
};
export default notesService;
