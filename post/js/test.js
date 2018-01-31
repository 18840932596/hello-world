//使用RequireJS定义模块,指定依赖  
define('test',[],function(){  
    return {  
        roll:function(){  
             ajax();
        }  
    };  
});
function ajax() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange  = function () {
            if(xhr.readyState == 4){
                if  ((xhr.status >=200 && xhr.status <300) || xhr.status == 304){
                    alert(xhr.responseText);
                }else {
                    alert("Request was unsuccessful: " + xhr.status);
                }
            }

        };
        xhr.open("post","hehe.php",true);
        xhr.setRequestHeader("Content-Type","application/x-www-from-urlencoded");
        xhr.send(null);
  //text.com/api
  }