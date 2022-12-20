import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import BoardController from "./infra/controller/BoardController";
import BoardRepositoryDatabase from "./infra/repository/BoardRepositoryDatabase";
import ColumnRepositoryDatabase from "./infra/repository/ColumnRepositoryDatabase";
import CardRepositoryDatabase from "./infra/repository/CardRepositoryDatabase";

const connection = new PgPromiseConnection();
const boardRepository = new BoardRepositoryDatabase(connection);
const columnRepository = new ColumnRepositoryDatabase(connection);
const cardRepository = new CardRepositoryDatabase(connection);

const http = new ExpressAdapter();
new BoardController(http, connection, boardRepository, columnRepository, cardRepository);
http.listen(3000);
