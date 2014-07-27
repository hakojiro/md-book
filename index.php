<?php

function MarkUp($path) {

	extract($GLOBALS);

	include_once "./lib/markdown.php";
	$contents = Markdown(file_get_contents($path));
	include ('./tpl/layout.tpl');
	unset($contents);

}

if ($handle = opendir('./md')) {

	/* ディレクトリをループする際の正しい方法です */
	while (false !== ($file = readdir($handle))) {
		if ($file != '.' && $file != '..') {

			if (substr($file, -2) == 'md' && $file != 'index.md') {

				$files['file'][] = substr($file, 0, -3);

			} else {

				$dirs[] = $file;

			}

		}
	}

	closedir($handle);
}

foreach ($dirs as $dir) {
	if ($handle = opendir('./md/'.$dir)) {

		/* ディレクトリをループする際の正しい方法です */
		while (false !== ($file = readdir($handle))) {
			if ($file != '.' && $file != '..') {

				if (substr($file, -2) == 'md' && $file != 'index.md') {

					$files['dir'][$dir][] = substr($file, 0, -3);

				}

			}
		}

		closedir($handle);
	}

}

asort($files['file']);
ksort($files['dir']);

foreach ($files['dir'] as $key => $val) {
	asort($files['dir'][$key]);
}

// var_dump($files);

if (strlen($_GET['view']) == 0) {
	$view = 'index';
} else {
	$view = $_GET['view'];
}

if (strlen($_GET['dir']) == 0) {
	MarkUp('./md/'.$view.'.md');
} else {
	MarkUp('./md/'.$_GET['dir'].'/'.$view.'.md');
}
