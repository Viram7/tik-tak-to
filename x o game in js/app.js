let container_var = document.querySelector("#container");
let box_var = document.querySelectorAll(".box");
let restart_var = document.querySelector("#restart");
let winner_var = document.querySelector("#winner");
let x_win_var = document.querySelector("#x_win");
let o_win_var = document.querySelector("#o_win");

let turn_x = true;
let turn_o = false;
let draw_count = 0;
let x_win_count = 0;
let o_win_count = 0;


function turn_swap() { [turn_x ,turn_o] = [turn_o,turn_x]; }

stop_game = () => {

    box_var.forEach((box) => {
        box.disabled = true;
    } )
    
}


win = () =>
{
draw_count++;
   win_poss = 
[
   [0,1,2],
   [0,4,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [3,4,5],
   [6,4,2],
   [6,7,8]

]



    for( cheak of win_poss )
{   
      console.log(cheak[0] , cheak[1] , cheak[2]);
      console.log(box_var[cheak[0]].innerText, box_var[cheak[1]].innerText , box_var[cheak[2]].innerText)

      let block0 = box_var[cheak[0]].innerText;
      let block1 = box_var[cheak[1]].innerText;
      let block2 = box_var[cheak[2]].innerText;

       if(block0 != "" && block1 != "" && block2 != "")
       {
           if(block0 === block1 && block0 === block2)
           {   
               if(turn_o)
                   { winner_var.innerText = "player O win";
                        o_win_count++;
                        o_win_var.innerText = o_win_count.toString();
                    stop_game();

                   }
               else if(turn_x)
                   {
                   winner_var.innerText = "player X win";
                    x_win_count++;
                    x_win_var.innerText = x_win_count.toString();
                   stop_game();

                   }
           }
          
           
       }
    
}
}

draw = () => 
{
console.log(draw_count);
if(draw_count === 9){
    console.log("draw");
    stop_game();
winner_var.innerText = "match draw";
}
}


box_var.forEach((box)=> 
{

    box.addEventListener("click",() => 
    {

        if(turn_x)
            {
               // console.log(box.innerHTML);
                box.innerHTML = "X" ;
                box.disabled = true;
                
            }
        else if (turn_o)
        {
           // console.log(box.innerHTML);
            box.innerHTML = "O";
            box.disabled = true;
        }

        win();
        turn_swap();
        draw();

        

    })

})

reset_box = () =>
{

    box_var.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })

    winner_var.innerText = "lets play";

}


restart_var.addEventListener("click",() => {

    reset_box();


})




x_win_var.innerText = x_win_count.toString();