
export function fetchRecordList(Data) {
    return {
        type: "FETCH_RECORD_LIST",
        data: Data
    };
}

export function editClicked() {
    return {
        type: "EDIT_CLICKED"
    };
}

export function hideEdit() {
    return {
        type: "HIDE_EDIT"
    };
}

export function editRecord(Data) {
    return {
        type: "EDIT_RECORD",
        data: Data
    }
}

export function showSearchResult() {
    return {
        type: "SHOW_SEARCH_RESULT"
    };
}

export function setSearchResult(Data) {
    return {
        type: "SET_SEARCH_RESULT",
        data: Data
    };
}