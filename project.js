   var turn = 0;
          var arr1=[13,9,5,1]
$(document).ready(function(){  
         
         $('.array1').on('click', function (event) { 
             if (turn==0)
       {          
           
        $("#game"+arr1[0]).addClass("green");
//           console.log(this)
           arr1.shift()
            turn=1;
            check();
       }   
           else if  (turn == 1)
         { $("#game"+arr1[0]).addClass("blue");
               arr1.shift()
                turn=0;
                 check(); 
             }
     });
     let arr2=[14,10,6,2]
     
         $('.array2').on('click', function (event) { 
//            console.log(arr2)
             if (turn==0)
       {  
                      
        $("#game"+arr2[0]).addClass("green");
//           console.log(this)
           arr2.shift()
          turn=1;
            check();
       }
             
               else if  (turn == 1)
               { $("#game"+arr2[0]).addClass("blue");
               arr2.shift()
                turn=0;
                 check();
                
               }
     });
    
       let arr3=[15,11,7,3]
     
         $('.array3').on('click', function (event) { 
//            console.log(arr3)
             if (turn==0)
       {  
                
        $("#game"+arr3[0]).addClass("green");
//           console.log(this)
           arr3.shift()
          turn=1;
            check();
       }
             
            else if  (turn == 1)
               { $("#game"+arr3[0]).addClass("blue");
               arr3.shift()
                turn=0;
                 check();
               }
     });
    
       let arr4=[16,12,8,4]
     
         $('.array4').on('click', function (event) { 
//            console.log(arr4)
             if (turn==0)
       {  
             
        $("#game"+arr4[0]).addClass("green");
//           console.log(this)
           arr4.shift()
          turn=1;
            check();
       }
             
            else if  (turn == 1)
               { $("#game"+arr4[0]).addClass("blue");
               arr4.shift()
                turn=0;
                 check();  
               }
     });
        });

let check=function(){ 

         for (i=1 ; i<=4 ; i++){
             
         //check green
             
                if ($("#game"+i).hasClass("green")&&
                    $("#game"+(i+4)).hasClass("green")&&
                    $("#game"+(i+8)).hasClass("green")&&
                    $("#game"+(i+12)).hasClass("green")){
                    
                    alert("Green wins!!")
                    $('.game').off("click");
                }         
         //check blue
             
               if ($("#game"+i).hasClass("blue")&&
                    $("#game"+(i+4)).hasClass("blue")&& 
                    $("#game"+(i+8)).hasClass("blue")&& 
                    $("#game"+(i+12)).hasClass("blue")){
                   
                   alert("Blue wins!!")
                   $('.game').off("click");
               }
              }
       // row green
             
              for (r=1 ; r<=13 ; r=r+4){
                   if ($("#game"+r).hasClass("green")&&
                    $("#game"+(r+1)).hasClass("green")&&
                    $("#game"+(r+2)).hasClass("green")&&
                    $("#game"+(r+3)).hasClass("green")){
                     
                    alert("Green wins!!")
                     $('.game').off("click");
                   }       
          // row blue
                  
                  if ($("#game"+r).hasClass("blue")&&
                    $("#game"+(r+1)).hasClass("blue")&&
                    $("#game"+(r+2)).hasClass("blue")&&
                    $("#game"+(r+3)).hasClass("blue")){
                      
                     alert("Blue wins!!")
                     $('.game').off("click");
                  }   
              }
    
           //x1
    
   if ($("#game1").hasClass("green")&&
                    $("#game6").hasClass("green")&&
                    $("#game11").hasClass("green")&&
                    $("#game16").hasClass("green")){
                     
                     alert("Green wins!!")
                     $('.game').off("click");
                   }
    
     if ($("#game1").hasClass("blue")&&
                    $("#game6").hasClass("blue")&&
                    $("#game11").hasClass("blue")&&
                    $("#game16").hasClass("blue")){
                     
                     alert("Blue wins!!")
                     $('.game').off("click");
                   }
    
          //x2
    
    if ($("#game4").hasClass("green")&&
                    $("#game7").hasClass("green")&&
                    $("#game10").hasClass("green")&&
                    $("#game13").hasClass("green")){
                     
                    alert("Green wins!!")
                    $('.game').off("click");
                   }
    
    if ($("#game4").hasClass("blue")&&
                    $("#game7").hasClass("blue")&&
                    $("#game10").hasClass("blue")&&
                    $("#game13").hasClass("blue")){
                     
                    alert("Blue wins!!")
                    $('.game').off("click");
    }
    
          // tie
    else if ($(".game").not(".green").length==8 && $(".game").not(".blue").length==8){
            alert("It's a tie")
         $('.game').off("click");
    }
    
}