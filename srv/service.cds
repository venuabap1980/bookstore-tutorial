using {bookstore.db as db} from '../db/scheam';

service Bookstore {

    entity Books as projection on db.Books;
    entity Authors as projection on db.Authors;    
    entity Chapters as projection on db.Chapters;  
    entity Bookstatus as projection on db.Bookstatus;  


}
//annotate Bookstore.Books with @odata.draft.enabled;
