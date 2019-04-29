<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
	</body>
	<script type="text/javascript">
		var name='window';
		
		var obj={
			name:'obj',
			getName:function () {
				return function (){
					return this.name
				}
			}
		}		
		console.log(obj.getName()());//window
		
	</script>
</html>
