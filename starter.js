'use strict';
if (this.QUnitPractice === undefined) this.QUnitPractice = {};

(function(context) {

  function filterAuthorsByLanguage(authors, language) {
    var filteredAuthors = [];
    for (var author of authors) {
      if (author.language === language) {
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors;
  }

  function filterAuthorsCount(authors, language) {
    var filteredAuthors = filterAuthorsByLanguage(authors, language);

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

  function authorWithMostPublishedWorks(authors) {
    var authorName = '';
    var mostWorks = authors[0];
    for (var i = 1; i < authors.length; i++) {
      if (authors[i].publishedWorks > mostWorks.publishedWorks) {
        mostWorks = authors[i];
        authorName = authors[i].name;
      }
    }
    return authorName;
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
    }
    return Math.round(sum / authors.length);
  }

  function averagePublishedWorksByLanguage(authors, language){
    var filteredAuthors = filterAuthorsByLanguage(authors, language);
    var average = averagePublishedWorks(filteredAuthors);
    return average;
  }

  context.filterAuthorsCount = filterAuthorsCount;
  context.authorsWhoWroteOver500Filter = authorsWhoWroteOver500Filter;
  context.authorWithMostPublishedWorks = authorWithMostPublishedWorks;
  context.authorsWhoseNameBeginsWithLetter = authorsWhoseNameBeginsWithLetter;
  context.averagePublishedWorks = averagePublishedWorks;
  context.averagePublishedWorksByLanguage = averagePublishedWorksByLanguage;

})(window.QUnitPractice);
