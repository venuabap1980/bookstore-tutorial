sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"projectnav/test/integration/pages/BooksList",
	"projectnav/test/integration/pages/BooksObjectPage",
	"projectnav/test/integration/pages/ChaptersObjectPage"
], function (JourneyRunner, BooksList, BooksObjectPage, ChaptersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('projectnav') + '/test/flp.html#app-preview',
        pages: {
			onTheBooksList: BooksList,
			onTheBooksObjectPage: BooksObjectPage,
			onTheChaptersObjectPage: ChaptersObjectPage
        },
        async: true
    });

    return runner;
});

