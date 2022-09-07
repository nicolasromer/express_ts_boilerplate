import {WordDataObject, getEmptyDataObject} from "./data";

let data: WordDataObject = getEmptyDataObject();

export default {
    getAll() {
      return data.words || []
    },
    addWord(word: string) {
        data.words = [...data.words, word]
    }
}

