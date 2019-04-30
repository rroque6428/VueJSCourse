export const MyMixins = {
    computed: {
        computedReverseText() {
            let s = this.mytext;
            return s.split('').reverse().join('');
        },
        computedCountLetters() {
            let s = this.mytext;
            if (s) {
                return `${s} (${s.length})`;
            }
            return '';
        }
}
}