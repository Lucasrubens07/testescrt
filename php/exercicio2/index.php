<?php

$juros = [0.02, 0.015, 0.018, 0.022, 0.025, 0.017, 0.03, 0.012, 0.019, 0.021, 0.023, 0.02];

$valorAcumulado = 0;

for ($i = 0; $i < count($juros); $i++) {
    $valorAcumulado = ($valorAcumulado + 1) * ($juros[$i] + 1) - 1;
}

echo $valorAcumulado;
