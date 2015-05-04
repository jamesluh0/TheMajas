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


        $("#jade1").mousedown(function() {
        var flag = false;
        var stop;

        ma.currentTime = 0;
		ma.play();	
        stop = setTimeout(function() {
            flag = true;
           	ma.loop = true;
        }, 500);
        $("#jade1").mouseup(function() {
            if (!flag) {
                clearTimeout(stop);
            }
            ma.loop = false;
            
        });
    });

	$("#jade2").mousedown(function() {
        var flag = false;
        var stop;

        ja1.currentTime = 0;
		ja1.play();	
        stop = setTimeout(function() {
            flag = true;
           	ja1.loop = true;
        }, 500);
        $("#jade2").mouseup(function() {
            if (!flag) {
                clearTimeout(stop);
            }
            ja1.loop = false;
            
        });
    });


    $("#jade3").mousedown(function() {
        var flag = false;
        var stop;

        ja2.currentTime = 0;
		ja2.play();	
        stop = setTimeout(function() {
            flag = true;
           	ja2.loop = true;
        }, 500);
        $("#jade3").mouseup(function() {
            if (!flag) {
                clearTimeout(stop);
            }
            ja2.loop = false;
            
        });
    });



})