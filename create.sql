
drop table public.board cascade;
drop table public.column cascade;
drop table public.card cascade;


create table public.board (
    id_board serial primary key,
    name text
);

create table public.column (
    id_column serial primary key,
    name text,
    id_board integer references public.board(id_board) on delete cascade ,
    has_estimative bool
);

create table public.card (
    id_card serial primary key,
    title text,
    id_column integer references public.column(id_column) on delete cascade ,
    estimative integer
);


insert into public.board (name) values ('board1');
insert into public.column (id_column, id_board, name, has_estimative) values (1,1,'Coluna A', true);
insert into public.column (id_column, id_board, name, has_estimative) values (2,1,'Coluna B', true);
insert into public.column (id_column, id_board, name, has_estimative) values (3,1,'Coluna C', true);
insert into public.column (id_column, id_board, name, has_estimative) values (4,1,'Coluna D', true);
insert into public.card (id_card, id_column, title, estimative) values (1,1,'Atividade A', 3);
insert into public.card (id_card, id_column, title, estimative) values (2,1,'Atividade B', 3);
insert into public.card (id_card, id_column, title, estimative) values (3,1,'Atividade C', 3);
