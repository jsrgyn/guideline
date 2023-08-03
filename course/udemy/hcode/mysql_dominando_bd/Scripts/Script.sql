/*CREATE DATABASE BANCO;

USE BANCO;

CREATE DATABASE banco2;

use banco2;

drop database banco2;

drop database BANCO;*/

/*CREATE DATABASE hcode;

use hcode;*/

-- Entidades. (Modelo - entidade e relacionamento)

/*CREATE TABLE clientes (
	id INT,
	nome VARCHAR(100)
);

INSERT INTO clientes values (1, 'Jose da Silva');

INSERT INTO clientes (nome, id) values ('João da Silva', 2);

SELECT * FROM clientes;*/

-- DROP DATABASE banco;

-- DROP DATABASE hcode;

CREATE DATABASE hcode;

use hcode;

CREATE table tb_funcionarios (
   id int,
   name VARCHAR(100),
   salario decimal(10,2),
   admissao date,
   sexo enum ('F', 'M'),
   cadastro timestamp default current_timestamp()
  );
 
insert into tb_funcionarios values(1, 'Pedro Henrique', 4999.99, '2016-01-01', 'M');
 
describe tb_funcionarios;

insert into tb_funcionarios values(1, 'Pedro Henrique', 4999.99, '2016-01-01', 'M', NULL);

use hcode;

SELECT * from tb_funcionarios tf;

UPDATE tb_funcionarios 
set salario = salario * 1.1;

DELETE FROM tb_funcionarios;

CREATE table tb_pessoas (
	id int,
	nome varchar(100),
	sexo enum ('M', 'F')
);

use hcode;

insert into tb_pessoas values (1, 'João', 'M');
insert into tb_pessoas (sexo, nome) values ('F', 'Maria');

SELECT * from tb_pessoas tp;

insert into tb_pessoas (nome, sexo) values 
('Divanei', 'M'),
('Luiz', 'M'),
('Djalma', 'M'),
('Natali', 'F'),
('Tatiane', 'F'),
('Cristiane', 'F'),
('Jaqueline', 'F');

insert into tb_funcionarios 
select id, nome, 950, CURRENT_TIMESTAMP(), sexo, null from tb_pessoas; 

select * from tb_funcionarios tf;

select COUNT(*) as total from tb_funcionarios;

SELECT name, salario as atual,
CONVERT(salario * 1.1, dec(10,2)) as 'salario com aumento de 10%'
from tb_funcionarios tf;

use hcode;

select * from tb_funcionarios where sexo = 'M';

select * from tb_funcionarios where sexo != 'M';

select * from tb_funcionarios where sexo <> 'M';

select * from tb_funcionarios tf where sexo != 'M' and salario > 1000;

update tb_funcionarios set salario = salario * 1.4 where id = 3;

select * from tb_funcionarios tf where sexo != 'M' or salario > 1000;


-- --------------------------------------

-- 14. Where Like, Between e Soundex

select * from tb_funcionarios tf where name like '%a%';

select * from tb_funcionarios tf where name like '__V%';

select * from tb_funcionarios tf where name not like 'j%';

select * from tb_funcionarios tf where salario BETWEEN 1000 and 2000;

select * from tb_funcionarios tf where salario not BETWEEN 1000 and 2000;

select * from tb_funcionarios tf where SOUNDEX(name) = SOUNDEX('Luis');

-- 15. Adicionando filtros com Datas

select * from tb_funcionarios tf where cadastro > '2016-01-01';
select * from tb_funcionarios tf where cadastro > '2016/01/01';
select * from tb_funcionarios tf where cadastro > '2016.01.01';
select * from tb_funcionarios tf where cadastro > '20160101';
select * from tb_funcionarios tf where cadastro > '2016-01-01';

update tb_funcionarios set admissao = CURRENT_DATE() where id = 1;

update tb_funcionarios set admissao = DATE_ADD(CURRENT_DATE(), INTERVAL 60 day) where id = 2 ;

select DATEDIFF(admissao, CURRENT_DATE()) as `diferença de dias` from tb_funcionarios where id = 2;

select * from tb_funcionarios tf where MONTH(admissao) = 7;

-- 16. A Cláusula Order by e Limit

select * from tb_funcionarios tf order by name;

select * from tb_funcionarios tf order by 2;

select * from tb_funcionarios tf order by salario desc, name;

select * from tb_funcionarios tf order by salario limit 0, 3;

select * from tb_funcionarios tf where year(cadastro) = 2016 and MONTH(cadastro) = 5
order by salario LIMIT 0, 3;

select * from tb_funcionarios tf where year(admissao) = 2016 and MONTH(admissao) = 5
order by salario LIMIT 0, 3;


-- 18. Dominando o comando Update

update tb_funcionarios 
set salario = 3000
where id = 5;

select * from tb_funcionarios tf where id = 5;

UPDATE tb_funcionarios 
SET salario = 4000, admissao = '2015-12-20'
where
  id = 6;
 
select * from tb_funcionarios tf WHERE id = 6;

-- 19. Dominando o comando Delete

delete from tb_funcionarios where id = 1;

start transaction;

delete from tb_pessoas;

SELECT * from tb_pessoas tp;

rollback;

commit;

insert into tb_pessoas values(null, 'José', 'M');

truncate table tb_pessoas;

-- 20. Criando e relacionando as tabelas

drop table tb_funcionarios;

drop table tb_pessoas;

CREATE table tb_pessoas (
	idpessoa int auto_increment not null,
	desnome varchar(255) not null,
	dt_cadastro timestamp not null default current_timestamp(),
	constraint PK_pessoas primary key (idpessoa)
) engine = innoDB;

create table tb_funcionarios (
	idfuncionario int auto_increment not null,
	idpessoa int not null,
	vlsalario decimal(10,2) not null default 1000.00,
	dtadmissao date not null,
	constraint Pk_funcionario primary key (idfuncionario),
	constraint Fk_funcionario_pessoas foreign key (idpessoa)
		references tb_pessoas (idpessoa)
) engine = innoDB;

insert into tb_pessoas values(null, 'João', null);

select * from tb_pessoas tp;

INSERT into tb_funcionarios values(null, 1, 5000, current_date());

INSERT into tb_funcionarios values(null, 2, 5000, current_date());

-- 21. Criando Consultas Avançadas com Joins (vídeo e PDF)

SELECT * 
FROM tb_funcionarios a
inner join tb_pessoas b on a.idpessoa = b.idpessoa;

select * 
from tb_funcionarios tf 
inner join tb_pessoas tp using(idpessoa);

INSERT into tb_pessoas values(null, 'Glaucio', current_date());

select * 
from tb_pessoas a 
-- left join tb_pessoas b  using(idpessoa);
left join tb_funcionarios b on a.idpessoa = b.idpessoa;

select * 
from tb_pessoas a 
right join tb_funcionarios b on a.idpessoa = b.idpessoa;


-- 22. Criando subconsultas com subquery

user hcode;

insert into tb_pessoas values(null, 'Jose', current_date());

select idpessoa from tb_pessoas tp where desnome like 'J%';

delete from tb_pessoas where idpessoa in (select idpessoa from tb_pessoas tp where desnome like 'J%');

-- 23. A cláusula Group By

CREATE TABLE tb_pedidos (
  idpedido INT auto_increment NOT NULL,
  idpessoa INT NOT NULL,
  dtpedido DATETIME NOT NULL,
  vlpedido DEC(10,2),
  constraint PK_pedidos PRIMARY KEY(idpedido),
  constraint FK_pedidos_pessoas foreign key (idpessoa) references tb_pessoas (idpessoa)
);


select * from tb_pessoas tp;

insert into tb_pedidos value(null, 1, current_date(), 2300.00);
insert into tb_pedidos value(null, 1, current_date(), 5000);
insert into tb_pedidos value(null, 1, current_date(), 10000);
insert into tb_pedidos value(null, 1, current_date(), 3000);

insert into tb_pedidos value(null, 2, current_date(), 1999.90);
insert into tb_pedidos value(null, 2, current_date(), 2000);
insert into tb_pedidos value(null, 2, current_date(), 123.45);

insert into tb_pedidos value(null, 3, current_date(), 4000);

select 
  b.desnome, 
  sum(a.vlpedido) as total,
  CONVERT(avg(a.vlpedido), dec(10,2)) as media,
  convert(min(a.vlpedido), dec(10.2)) as 'menor valor',
  convert(max(a.vlpedido), dec(10.2)) as 'maior valor',
  count(*) as 'Total de pedidos'
from tb_pedidos a inner join tb_pessoas b using(idpessoa) 
group by b.idpessoa
order by sum(a.vlpedido);	


-- 24. Filtrando grupos com having
select 
  b.desnome, 
  sum(a.vlpedido) as total,
  CONVERT(avg(a.vlpedido), dec(10,2)) as media,
  convert(min(a.vlpedido), dec(10.2)) as 'menor valor',
  convert(max(a.vlpedido), dec(10.2)) as 'maior valor',
  count(*) as 'Total de pedidos'
from tb_pedidos a inner join tb_pessoas b using(idpessoa) 
group by b.idpessoa
having sum(a.vlpedido) > 6200 
order by sum(a.vlpedido);	


-- 25. Criando views

create view v_pedidostotais 
as 
select 
  b.desnome, 
  sum(a.vlpedido) as total,
  CONVERT(avg(a.vlpedido), dec(10,2)) as media,
  convert(min(a.vlpedido), dec(10.2)) as 'menor valor',
  convert(max(a.vlpedido), dec(10.2)) as 'maior valor',
  count(*) as 'Total de pedidos'
from tb_pedidos a inner join tb_pessoas b using(idpessoa) 
group by b.idpessoa 
order by sum(a.vlpedido);	

select * from v_pedidostotais where total > 7000;

-- 26. Trabalhando com Stored Procedures

drop procedure sp_pessoa_save;

delimiter $$

CREATE procedure sp_pessoa_save (
pdesnome varchar(256)
)
begin 
	insert into tb_pessoas values(null, pdesnome, current_date());

	select * from tb_pessoas tp where idpessoa = LAST_INSERT_ID(); 
end $$

delimiter ;

call sp_pessoa_save('Massaharu'); 

-- 27. Comandos avançados para Stored Procedures

drop procedure if exists sp_funcionario_save;

delimiter $$;

create procedure sp_funcionario_save (
  pdesnome varchar(255),
  pvlsalario decimal(10,2),
  pdtadmissao datetime
)
begin
	declare vidpessoa int;

	start transaction;

	select idpessoa into vidpessoa from tb_pessoas where desnome = pdesnome;	

-- 	select CONCAT('Pessoa as cadastrado ', pdesnome, 'com cod: ', vidpessoa) as resultado;

-- 	if not exists (select idpessoa from tb_pessoas where desnome = pdesnome) then
    if (vidpessoa is null) then
	  
		insert into tb_pessoas values(null, pdesnome, current_date());
		set vidpessoa = LAST_INSERT_ID();
	
	else
	   
		select 'usuário já cadstrado!' as resultado;
		rollback;
	
	end if;

	if not exists (select idpessoa from tb_funcionarios where idpessoa = vidpessoa) then
	  
		insert into tb_funcionarios values(null, vidpessoa, pvlsalario, pdtadmissao);
	
		commit;
	
    	select 'Dados cadastrados com sucesso!' as resultado;
	
	else
	   
		select 'usuário já cadstrado!' as resultado;
		rollback;
	
	end if;
end $$

delimiter ;

call sp_funcionario_save('João sem', 50000, CURRENT_DATE());

select * from tb_pessoas tp;

select * from tb_funcionarios tf;

-- 28. Criando Funções

drop function if exists fn_imposto_renda;

delimiter $$

create function fn_imposto_renda (
  pvlsalario decimal(10,2)
)
returns dec(10,2) deterministic
begin 
	
	
	declare vimposto decimal(10,2);
	
	/*
	 
	 até 1903,98 não paga imposto
	 1903,99 até 2826,65 paga 7,5% deduzir do imposto 142,80
	 2826,66 até 3751,05 paga 15% deduzir do imposto 354,80
	 3751,66 até 4664,68 paga 22,5% deduzir do imposto 636,13
	 acima 4664,68 paga 27,5% deduzir do imposto 869,36 
	  
	  */
	
	set vimposto = case 
		when pvlsalario <= 1903.98 then 0
		when pvlsalario >= 1903.99 and pvlsalario <= 2826.65 then (pvlsalario * .075) - 142.00
		when pvlsalario >= 2826.66 and pvlsalario <= 3751.05 then (pvlsalario * .15) - 354.80
		when pvlsalario >= 3751.06 and pvlsalario <= 4664.68 then (pvlsalario * .225) - 636.13
		when pvlsalario >= 4664.68 then (pvlsalario * .275) - 869.36
	end;

	return vimposto;
end $$ 

delimiter ;

select *, fn_imposto_renda(a.vlsalario) as vlimposto from tb_funcionarios a 
inner join tb_pessoas b using(idpessoa);

-- 29. Encerramento

-- 30. Registro e Hospedagem

 











