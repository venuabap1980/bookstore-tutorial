using {
    cuid,
    managed,
    sap.common.Currencies
} from '@sap/cds/common';

namespace bookstore.db;


entity Books : cuid, managed {
    title       : String(100);
    author      : Association to Authors;
    genre       : String;
    publishedAt : Date;
    pages       : Integer;
    price       : Decimal(9, 2);
    Currency    : Association to Currencies;
    stock       : Integer;
    status      : Association to Bookstatus;
    Chapters    : Composition of many Chapters
                      on Chapters.book = $self;
}

type bookstatuscode : String(1) enum {
    Available = 'A';
    LowStock = 'L';
    Notavailable = 'N';
}

entity Bookstatus {
    key code        : bookstatuscode;
        criticality : Integer;
        displaytext : String;
}

entity Authors : cuid, managed {
    name  : String;
    books : Association to many Books
                on books.author = $self;

}

entity Chapters : cuid, managed {
    key book   : Association to Books;
        number : Integer;
        title  : String;
        pages  : Integer;
}
