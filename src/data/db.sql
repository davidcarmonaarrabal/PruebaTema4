CREATE DATABASE hospital;

USE hospital;

CREATE TABLE medicos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    especialidad VARCHAR(100),
    perfil ENUM('RESIDENTE', 'ESPECIALISTA')
);

CREATE TABLE pacientes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    localidad VARCHAR(200),
    fecha_nacimiento DATE
);

INSERT INTO medicos (nombre, especialidad, perfil)
VALUES
('Ramón', 'Cardiología', 'RESIDENTE'),
('Juan', 'Pediatría', 'ESPECIALISTA'),
('Shaun', 'Cirujano', 'RESIDENTE')

INSERT INTO pacientes (nombre, localidad, fecha_nacimiento)
VALUES
('David', 'Montilla', '2003-05-23'),
('Rafa', 'Sevilla', '2002-02-11'),
('Antonio Jorge', 'Granada', '1992-12-02')