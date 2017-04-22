<?php
//----------------------------------------------------------------------------
// Extracts environment variables from a local file.
//----------------------------------------------------------------------------

namespace Jaypha;

function extractProperties($source)
{
  $vars = [];
  $lines = explode("\n", $source);

  foreach ($lines as $line)
  {
    $line = trim($line);

    if (strlen($line) == 0 || substr($line, 0,1) == '#')
      continue;
    $v = explode("=", $line, 2);
    $vars[trim($v[0])] = trim($v[1] ?? "");
  }
  return $vars;
}

function arrayToEnv($source)
{
  foreach ($source as $i => $v)
    putenv("$i=$v");
}

function env($file)
{
  arrayToEnv(extractProperties(file_get_contents($file)));
}

//----------------------------------------------------------------------------
// Copyright (C) Jaypha.
// License: BSL-1.0
// Authors: Jason den Dulk
//
