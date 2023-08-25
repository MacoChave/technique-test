-- CREATE test DATABASE WITH UTF8 ENCODING;

CREATE DATABASE test;

USE `test`;


CREATE TABLE IF NOT EXISTS 'pais' ( pais VARCHAR(5) PRIMARY KEY,
                                                            nompais VARCHAR(250) NOT NULL) ;

CREATE TABLE IF NOT EXISTS 'departamento' ( pais VARCHAR(5),
                                                 depto VARCHAR(5),
                                                       nomdepto VARCHAR(250) NOT NULL,
                                                                             PRIMARY KEY (pais,
                                                                                          depto) , CONSTRAINT fk_departamento_pais
                                           FOREIGN KEY (pais) REFERENCES pais(pais)) ;

CREATE TABLE IF NOT EXISTS 'persona' ( idpersona INT PRIMARY KEY,
                                                             nombre VARCHAR(100),
                                                                    pais VARCHAR(5),
                                                                         departamento VARCHAR(5),
                                                                                      direccion VARCHAR(100),
                                                                                                CONSTRAINT fk_persona_departamento
                                      FOREIGN KEY (pais,
                                                   departamento) REFERENCES departamento(pais, depto)) ;