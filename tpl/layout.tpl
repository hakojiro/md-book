<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="robots" content="noindex,nofollow">
	<title><?php echo $title_for_layout; ?> md-book</title>
	<link rel="stylesheet" href="./css/style.css">
</head>
<body>

	<div id="header">

		<a href="./">md-book</a>

		<div class="bread">
			<ol>
				<?php if($_GET['dir']): ?>
					<li><?php echo $_GET['dir']; ?> /</li>
				<?php endif; ?>
				<li><?php echo $_GET['view']; ?></li>
			</ol>
		</div>

	</div>

	<div id="contents">

		<div id="sidebar">

			<ul>

				<?php foreach($files['dir'] as $dir => $file_array): ?>
					<li><?php echo $dir ?>
						<ul class="book">
							<?php foreach($file_array as $file): ?>
								<li <?php if($dir == $_GET['dir'] && $file == $_GET['view']){ echo 'class="view"'; } ?>>
									<a href="./?dir=<?php echo $dir; ?>&view=<?php echo $file; ?>"><?php echo $file; ?></a>
								</li>
							<?php endforeach; ?>
						</ul>
					</li>

				<?php endforeach; ?>

				<?php foreach($files['file'] as $file): ?>

					<li <?php if($_GET['dir'] == null  && $file == $_GET['view']){ echo 'class="view"'; }?>>
						<a href="./?view=<?php echo $file; ?>"><?php echo $file; ?></a>
					</li>

				<?php endforeach; ?>

			</ul>
		</div>

		<div id="article">

			<div class="page-index">
			</div>


			<?php echo $contents; ?>

		</div>

	</div>

	<div id="footer">

	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="./js/js.js"></script>

</body>
</html>
