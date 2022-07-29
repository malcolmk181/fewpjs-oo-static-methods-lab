class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return (string.match(/[A-Za-z\-\_\ \']/g) || [""]).join('');
  }

  static titleize(string) {
    let words = string.split(' ');

    const ARTICLES = ['the','a','an','but','of','and','for','at','by','from']

    words = words.map((word, index) => {
      if (index === 0 || !ARTICLES.includes(word)) {
        // console.log(`word: ${word}`);
        // console.log(`this.capitalize(word): ${this.capitalize(word)}`);
        word = this.capitalize(word);
      }
      return word;
    });

    return words.join(' ');
  }
}