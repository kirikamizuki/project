			

			let username1=document.getElementById("username0");
			let pwd1=document.getElementById("pwd0");
			let pwd12=document.getElementById("pwd1");
			let btn1=document.getElementById("log0");
			
			btn1.onclick=function(){

				if(username0.value==""||(pwd0.value=="")||pwd1.value==""){
					alert("请把信息填写完整");
				}
				else if(pwd1.value==pwd12.value){ 
					
					localStorage.setItem('username1',username.value);
					localStorage.setItem('pwd1',pwd.value);
					
					alert("用户注册成功\n请登入");
					window.location.href="dengru.html";
					window.event.returnValue=false;
					}else{
						alert(" 两次密码内容不一致！\n请重新输入");
					}
				
			} 


			let users=[{name:'asd',pwd:'111'},{name:'王五',pwd:'111'},{name:'a',pwd:'111'}];
			let gly=[{name:'张三',pwd:'123'},{name:'李四',pwd:'123'}]
			
			let username=document.getElementById("username");
			let pwd=document.getElementById("pwd");
			let btn=document.getElementById("log");
			
			
			btn.onclick=function(){
				
				let ret=users.some(function(value){
					return value.name==username.value && value.pwd==pwd.value;
				});
				
				let gly1=gly.some(function(value){
					return value.name==username.value && value.pwd==pwd.value;
				});
				
				
				if(username.value==localStorage.getItem('username1') && pwd.value==localStorage.getItem('pwd1')){
					alert("用户登入成功");
					window.location.href="index.html"
					
				}else if(ret){
					alert("用户登入成功");
					window.location.href="index.html"
					
				}else if(gly1){
					alert("管理员登入成功");
					window.location.href="GuanLi.html"
				}else{
					alert("输入正确用户名和密码");
				}
			}