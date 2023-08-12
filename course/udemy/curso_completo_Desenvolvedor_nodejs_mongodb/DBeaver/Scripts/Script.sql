CREATE TABLE noticias(
	id_noticias int NOT NULL PRIMARY KEY auto_increment,
	titulo varchar(100),
	noticia text,
	data_criacao timestamp DEFAULT current_timestamp
);

show tables;

insert into noticias(titulo, noticia) values ('titulo da noticia', 'conteudo da noticia');

select * from noticias n;

insert into noticias(titulo, noticia) value ('Outra noticia', 'conteudo da outra noticia');

select * from noticias n;

SHOW FULL PROCESSLIST;

select * from noticias where id_noticias = 2;


use portal_noticias;

alter table noticias add column resumo varchar(100);

alter table noticias add column autor varchar(30);

alter table noticias add column data_noticia date;

select * from noticias n;

