import Connection from "./Connection";
import pgq from "pg-promise";

export default class PgPromiseConnection implements Connection {
    connection: any;

    constructor() {
        this.connection = pgq()("postgres://postgres:Bruna2012*@localhost:5432/fullstack");
    }
    close(): Promise<void> {
        return this.connection.$pool.end();
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }

}
