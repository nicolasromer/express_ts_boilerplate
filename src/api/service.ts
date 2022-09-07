import repository from "./repository";

export default {
    getWords(): string[] {
        return repository.getAll();
        // filtering
    },

    createWord(word: string) {
        // transformations, other business logic
        repository.addWord(word);
    }
}
