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





