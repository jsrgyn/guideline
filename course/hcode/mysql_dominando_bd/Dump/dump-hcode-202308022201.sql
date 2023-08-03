-- MySQL dump 10.13  Distrib 8.0.33, for macos13.3 (arm64)
--
-- Host: 127.0.0.1    Database: hcode
-- ------------------------------------------------------
-- Server version	8.0.33

CREATE DATABASE IF NOT EXISTS `hcode_dump`;
USE `hcode_dump`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_funcionarios`
--

DROP TABLE IF EXISTS `tb_funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_funcionarios` (
  `idfuncionario` int NOT NULL AUTO_INCREMENT,
  `idpessoa` int NOT NULL,
  `vlsalario` decimal(10,2) NOT NULL DEFAULT '1000.00',
  `dtadmissao` date NOT NULL,
  PRIMARY KEY (`idfuncionario`),
  KEY `Fk_funcionario_pessoas` (`idpessoa`),
  CONSTRAINT `Fk_funcionario_pessoas` FOREIGN KEY (`idpessoa`) REFERENCES `tb_pessoas` (`idpessoa`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_funcionarios`
--

LOCK TABLES `tb_funcionarios` WRITE;
/*!40000 ALTER TABLE `tb_funcionarios` DISABLE KEYS */;
INSERT INTO `tb_funcionarios` VALUES (1,1,5000.00,'2023-07-29'),(3,5,50000.00,'2023-08-02'),(4,6,50000.00,'2023-08-02'),(5,7,50000.00,'2023-08-02'),(6,8,50000.00,'2023-08-02');
/*!40000 ALTER TABLE `tb_funcionarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_pedidos`
--

DROP TABLE IF EXISTS `tb_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_pedidos` (
  `idpedido` int NOT NULL AUTO_INCREMENT,
  `idpessoa` int NOT NULL,
  `dtpedido` datetime NOT NULL,
  `vlpedido` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idpedido`),
  KEY `FK_pedidos_pessoas` (`idpessoa`),
  CONSTRAINT `FK_pedidos_pessoas` FOREIGN KEY (`idpessoa`) REFERENCES `tb_pessoas` (`idpessoa`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pedidos`
--

LOCK TABLES `tb_pedidos` WRITE;
/*!40000 ALTER TABLE `tb_pedidos` DISABLE KEYS */;
INSERT INTO `tb_pedidos` VALUES (1,1,'2023-07-31 00:00:00',2300.00),(2,1,'2023-07-31 00:00:00',5000.00),(3,1,'2023-07-31 00:00:00',10000.00),(4,1,'2023-07-31 00:00:00',3000.00),(5,2,'2023-07-31 00:00:00',1999.90),(6,2,'2023-07-31 00:00:00',2000.00),(7,2,'2023-07-31 00:00:00',123.45),(8,3,'2023-07-31 00:00:00',4000.00);
/*!40000 ALTER TABLE `tb_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_pessoas`
--

DROP TABLE IF EXISTS `tb_pessoas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_pessoas` (
  `idpessoa` int NOT NULL AUTO_INCREMENT,
  `desnome` varchar(255) NOT NULL,
  `dt_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idpessoa`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pessoas`
--

LOCK TABLES `tb_pessoas` WRITE;
/*!40000 ALTER TABLE `tb_pessoas` DISABLE KEYS */;
INSERT INTO `tb_pessoas` VALUES (1,'João','2023-07-29 01:09:51'),(2,'Glaucio','2023-07-31 00:00:00'),(3,'Jose','2023-07-31 00:00:00'),(4,'Massaharu','2023-08-02 00:00:00'),(5,'Joãox','2023-08-02 00:00:00'),(6,'Joãoxx','2023-08-02 00:00:00'),(7,'João zero','2023-08-02 00:00:00'),(8,'João sem','2023-08-02 00:00:00');
/*!40000 ALTER TABLE `tb_pessoas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `v_pedidostotais`
--

DROP TABLE IF EXISTS `v_pedidostotais`;
/*!50001 DROP VIEW IF EXISTS `v_pedidostotais`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_pedidostotais` AS SELECT 
 1 AS `desnome`,
 1 AS `total`,
 1 AS `media`,
 1 AS `menor valor`,
 1 AS `maior valor`,
 1 AS `Total de pedidos`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'hcode'
--
/*!50003 DROP FUNCTION IF EXISTS `fn_imposto_renda` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `fn_imposto_renda`(
  pvlsalario decimal(10,2)
) RETURNS decimal(10,2)
    DETERMINISTIC
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
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_funcionario_save` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_funcionario_save`(
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
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_pessoa_save` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_pessoa_save`(
pdesnome varchar(256)
)
begin 
	insert into tb_pessoas values(null, pdesnome, current_date());

	select * from tb_pessoas tp where idpessoa = LAST_INSERT_ID(); 
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `v_pedidostotais`
--

/*!50001 DROP VIEW IF EXISTS `v_pedidostotais`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `v_pedidostotais` AS select `b`.`desnome` AS `desnome`,sum(`a`.`vlpedido`) AS `total`,cast(avg(`a`.`vlpedido`) as decimal(10,2)) AS `media`,cast(min(`a`.`vlpedido`) as decimal(10,0)) AS `menor valor`,cast(max(`a`.`vlpedido`) as decimal(10,0)) AS `maior valor`,count(0) AS `Total de pedidos` from (`tb_pedidos` `a` join `tb_pessoas` `b` on((`a`.`idpessoa` = `b`.`idpessoa`))) group by `b`.`idpessoa` order by sum(`a`.`vlpedido`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-02 22:01:40
