
drop table vuejs.board cascade;
drop table vuejs.column cascade;
drop table vuejs.card cascade;


create table vuejs.board (
    id_board serial primary key,
    name text
);

create table vuejs.column (
    id_column serial primary key,
    name text,
    id_board integer references vuejs.board(id_board) on delete cascade ,
    has_estimative bool
);

create table vuejs.card (
    id_card serial primary key,
    title text,
    id_column integer references vuejs.column(id_column) on delete cascade ,
    estimative integer
);


insert into vuejs.board (name) values ('Project 1');
insert into vuejs.column (id_board, name, has_estimative) values (1,'Coluna A', true);
insert into vuejs.column (id_board, name, has_estimative) values (1,'Coluna B', true);
insert into vuejs.column (id_board, name, has_estimative) values (1,'Coluna C', true);
insert into vuejs.column (id_board, name, has_estimative) values (1,'Coluna D', true);
insert into vuejs.card (id_column, title, estimative) values (1,'Atividade A', 3);
insert into vuejs.card (id_column, title, estimative) values (1,'Atividade B', 3);
insert into vuejs.card (id_column, title, estimative) values (1,'Atividade C', 3);
