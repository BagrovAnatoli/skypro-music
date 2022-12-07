// import { objValuesToArray } from '../../utils/objValuesToArray';
import { secondsToText } from '../../utils/secondsToText';

export const catalogSelector = (store) => store.catalog;

export const tracksLoadingSelector = (store) => catalogSelector(store)?.tracksLoading;

export const tracksErrorSelector = (store) => catalogSelector(store)?.tracksError;

export const allTracksSelector = (store) => catalogSelector(store)?.allTracks;

export const allTracksParser = (store) => allTracksSelector(store).map(track => {
    const title = {
        image: {
            alt: "Логотип",
            path: track.logo,
        },
        text: track.name,
        link: "http://",
        spanText: "",
    };
    const author = {
        text: track.author,
        link: "http://",
    };
    const album = {
        text: track.album,
        link: "http://",
    };
    const time = {
        text: secondsToText(track.duration_in_seconds),
    };
    return {
        id: track.id,
        title,
        author,
        album,
        time,
    }
});


// export const allErrorsSelector = (store) => {
//     const data = userErrorResponseDataSelector(store);
//     return data ? objValuesToArray(data) : [];
// };
