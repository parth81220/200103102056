function demoExternalAlert()
			{
				alert("external alert");
			}
			
			function demoExternalConfirm(){
				if(confirm("Are you human?")){
					alert("you are human");
				}
				else{
					alert("NO, you are not human");
				}
			}
			function demoExternalPrompt(){
				var fn=prompt("Enter firstname");
				var ln=prompt("Enter lastname");
				alert(fn+" "+ln);
			}

			function bodyBGGreen(){
				document.body.style.backgroundColor="yellow";
			}
			function divBGGray(){
				document.getElementById("D1").style.backgroundColor="red";
			}

			function divBGDynamic(){
				document.getElementById("D1").style.backgroundColor=prompt("Enter color");
			}
			function bodyBGDynamic(){
				document.body.style.backgroundColor=prompt("Enter color");
			}

			function bodyBGCP1(){
				document.body.style.backgroundColor=document.getElementById("CP1").value;
			}
			function divBGCP2(){
				document.getElementById("D1").style.backgroundColor=document.getElementById("CP2").value;
			}