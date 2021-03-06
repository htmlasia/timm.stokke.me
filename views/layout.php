<?php
if ($this->data->devEnviroment == 'dev') {
	$prefix = '/timm.stokke.me/';
	$postfix = '';
} else {
	$prefix = '/';
	$postfix = '.min';
}

$css = $prefix.'css/main'.$postfix.'.css?v3';
$script = $prefix.'js/main'.$postfix.'.js?v3';

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Hi, I am Timm Stokke</title>
		<meta name="description" content="I've been passionately building websites, services and apps for web & mobile devices since 1997.">
		<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
		<link rel="stylesheet" href="<?php echo $css; ?>">
		<link rel="author" href="https://plus.google.com/107766367797089659313">
		<link rel="canonical" href="http://timm.stokke.me">
		<link rel="shortcut icon" href="<?php echo $prefix; ?>favicon.ico" type="image/x-icon">
		<link rel="icon" href="<?php echo $prefix; ?>favicon.ico" type="image/x-icon">
	</head>
	<body>


		<?php
		// Load view:
		echo $yield;

		// Include footer in all views:
		include "views/footer.php";
		?>


		<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
		<script src="<?php echo $script; ?>"></script>

		<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-4168066-2']);
		_gaq.push(['_setDomainName', 'stokke.me']);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
		</script>

	</body>
</html>
