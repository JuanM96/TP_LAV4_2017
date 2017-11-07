<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './composer/vendor/autoload.php';
require_once '/clases/AccesoDatos.php';
require_once '/clases/jugadorApi.php';
require_once '/clases/VerificarJWT.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

/*

¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).

  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/
$app = new \Slim\App(["settings" => $config]);
$app->group('/jugador', function () {
    $this->post('/alta', \jugadorApi::class . ':Alta');
    $this->post('/logIn', \jugadorApi::class . ':LogIn');
    $this->get('/traerTodos', \jugadorApi::class . ':traerJugadores');
});
$app->group('/ranking', function () {
    $this->post('/alta', \rankingApi::class . ':Alta');
    $this->get('/traerTodos', \rankingApi::class . ':traerRankings');
    $this->get('/traerTodosTest', \rankingApi::class . ':traerTodos');
})->add(\verificarJWT::class . ':VerificarToken');

$app->run();