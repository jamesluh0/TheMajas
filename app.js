$(document).ready(function(){

	var majaja = document.getElementsByTagName('audio')[0];
	var ma = document.getElementsByTagName('audio')[1];
	var ja1 = document.getElementsByTagName('audio')[2];
	var ja2 = document.getElementsByTagName('audio')[3];


		
	$('h1').click(function(){
			
			majaja.play();

			$('h1').fadeOut(200);

			setTimeout(function()
			{ 

				$('#jade1').show();
				$('#jade1').animate
				({
					left: '20%',

				});

			 }, 1000);


			setTimeout(function()
			{ 

				$('#jade2').show();
				$('#jade2').animate
				({
					left: '45%'
				});

			 }, 2000);


			setTimeout(function()
			{ 

				$('#jade3').show();
				$('#jade3').animate
				({
					left: '69%'
				});

			 }, 3000);

			setTimeout(function()
			{
				$('h2').fadeIn(200);
			},	4000);
			
	})


	$('#jade1').click(function(){
		ma.currentTime = 0;
		ma.play();
	})

	$('#jade2').click(function(){
		ja1.currentTime = 0;
		ja1.play();
	})

	$('#jade3').click(function(){
		ja2.currentTime = 0;
		ja2.play();
	})



})