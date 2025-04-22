<?php

$juros = [0.02, 0.015, 0.018, 0.022, 0.025, 0.017, 0.03, 0.012, 0.019, 0.021, 0.023, 0.02];

$valorAcumulado = ($juros[0] + 1) * ($juros[1] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[2] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[3] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[4] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[5] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[6] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[7] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[8] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[9] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[10] + 1) - 1;
$valorAcumulado = ($valorAcumulado + 1) * ($juros[11] + 1) - 1;

echo $valorAcumulado;