CREATE TABLE noticias(
	id_noticias int NOT NULL PRIMARY KEY auto_increment,
	titulo varchar(100),
	noticia text,
	data_criacao timestamp DEFAULT current_timestamp
);

show tables;

insert into noticias(titulo, noticia) values ('titulo da noticia', 'conteudo da noticia');

select * from noticias n;