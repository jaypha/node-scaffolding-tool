<?php
//----------------------------------------------------------------------------
// Sets include path for PHP
//----------------------------------------------------------------------------

define("ROOT_DIR", __DIR__);

$paths =
[
  <Path to php-fixdb>,
  ROOT_DIR."/phpsrc/properties",
  get_include_path(),
];

set_include_path(implode(PATH_SEPARATOR,$paths));

//----------------------------------------------------------------------------
// Copyright (C) [YEAR] [COPYRIGHT].
// License: [LICENSE]
// Authors: Jason den Dulk
//
