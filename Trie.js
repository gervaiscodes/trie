import TrieNode from '../TrieNode';

export default class Trie {
    constructor() {
        this.root = new TrieNode(null)
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(char);
            }
            node = node.children[char];
        }

        node.isWord = true; // Mark the end of a word
    }

    contains(word) {
        let node = this.root

        for (let char of word) {
            if (node.children[char]) {
                node = node.children[char];
            } else {
                return false
            }
        }

        return node.isWord === true
    }
}
