//使用RequireJS定义模块,指定依赖  
define('text',["test"],function(){  
    return {  
        roll:function(){  
             tan();
        }  
    };  
});
function tan(){
        var list = document.getElementsByClassName("j_alert");
        for(var i = 0;i<list.length;i++){
            list[i].onclick = function () {
                alert("弹出");

            }
        }
   }