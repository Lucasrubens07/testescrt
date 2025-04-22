<?php
    $json = json_encode($_POST, JSON_UNESCAPED_UNICODE);
    $arquivo = 'usuarios.json';
    file_put_contents($arquivo, $json);
    echo "seus dados foram cadastrados";

