'use strict';
if (this.QUnitPractice === undefined) this.QUnitPractice = {};

(function(context) {

  function filterAuthorsCount(authors, language) {
    var filteredAuthors = [];

    for (var author of authors) {
      if (author.language === language) {
        filteredAuthors.push(author);
      }
    }

    return filteredAuthors.length;
  }

  function authorsWhoWroteOver500Filter(authors) {
    var filteredAuthors = [];

    for (var author of authors) {
      if (author.publishedWorks > 500) {
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors.length;
  }

  function authorsWhoseNameBeginsWithLetter(authors, letter) {
    var filteredAuthors = [];
    for (var author of authors) {
      if (author.name.indexOf(letter) === 0) {
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors.length;
  }

  function averagePublishedWorks(authors) {
    var sum = 0;
    for (var author of authors) {
      sum += author.publishedWorks;
      console.log(author);
    }
    return Math.round(sum / authors.length);
  }

  function averagePublishedWorksByLanguage(authors, language){
    var sum = 0;
    var filteredAuthors = [];
    for (var author of authors) {
      if (author.language === language) {
        filteredAuthors.push(author);
        sum += author.publishedWorks;
      }
    }
    return Math.round(sum / filteredAuthors.length);
  }


  context.filterAuthorsCount = filterAuthorsCount;
  context.authorsWhoWroteOver500Filter = authorsWhoWroteOver500Filter;
  context.authorsWhoseNameBeginsWithLetter = authorsWhoseNameBeginsWithLetter;
  context.averagePublishedWorks = averagePublishedWorks;
  context.averagePublishedWorksByLanguage = averagePublishedWorksByLanguage;

})(window.QUnitPractice);
