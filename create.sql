
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
    have_estimates bool
);

create table public.card (
    id_card serial primary key,
    title text,
    id_column integer references public.column(id_column) on delete cascade ,
    estimates integer
);


insert into public.board (name) values ('board1');
insert into public.column (id_column, id_board, name, have_estimates) values (1,1,'Coluna A', true);
insert into public.column (id_column, id_board, name, have_estimates) values (2,1,'Coluna B', true);
insert into public.column (id_column, id_board, name, have_estimates) values (3,1,'Coluna C', true);
insert into public.column (id_column, id_board, name, have_estimates) values (4,1,'Coluna D', true);
insert into public.card (id_card, id_column, title, estimates) values (1,1,'Atividade 1', 3);
insert into public.card (id_card, id_column, title, estimates) values (2,1,'Atividade 1', 3);
insert into public.card (id_card, id_column, title, estimates) values (3,1,'Atividade 1', 3);
