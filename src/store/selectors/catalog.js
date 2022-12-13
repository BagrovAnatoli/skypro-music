// import { objValuesToArray } from '../../utils/objValuesToArray';
import { secondsToText } from '../../utils/secondsToText';

export const catalogSelector = (store) => store.catalog;

export const tracksLoadingSelector = (store) => catalogSelector(store)?.tracksLoading;

export const tracksErrorSelector = (store) => catalogSelector(store)?.tracksError;

export const currentTrackIdSelector = (store) => catalogSelector(store)?.currentTrackId;

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
        seconds: track.duration_in_seconds,
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

export const currentTrackFileSelector = (store) => {
    const id = currentTrackIdSelector(store);
    return allTracksSelector(store)
    ?.find((trackInfo) => id === trackInfo.id).track_file;
}

export const currentTrackAuthorSelector = (store) => catalogSelector(store)
?.currentTrackAuthor;

export const currentTrackAlbumSelector = (store) => catalogSelector(store)
?.currentTrackAlbum;

export const currentTrackDurationSelector = (store) => catalogSelector(store)
?.currentTrackDuration;