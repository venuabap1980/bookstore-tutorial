sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"bookstoreapplication/test/integration/pages/BooksList",
	"bookstoreapplication/test/integration/pages/BooksObjectPage"
], function (JourneyRunner, BooksList, BooksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('bookstoreapplication') + '/test/flpSandbox.html#bookstoreapplication-tile',
        pages: {
			onTheBooksList: BooksList,
			onTheBooksObjectPage: BooksObjectPage
        },
        async: true
    });

    return runner;
});

