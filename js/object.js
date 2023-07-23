  let food =[
     {
         id:9026246227,
         Verity:"biriyani",
         name:"Sukkubhai Biryani", 
         price:195, 
         ratting:3.9,
         qty:1,
         sidedish:"bread halwa",
		 picture:"./images/biryani.jpg"
     },
     {
         id:543224765,
         Verity:"biriyani",
         name:"dhonne biriyani", 
         price:185, 
         ratting:4.9, 
         qty:1,
         sidedish:"sweet beeda",
		 picture:"./images/conatct-donne.jpg"
     },
     {
         id:9026246228,
         Verity:"dosa",
         name:"onion dosa",
         price:50,
         ratting:3.2, 
         qty:1,
         sidedish:"medhu vadai",
		 picture:"./images/onion_dhosa.jpg"			 
     },
     {
         id:543275658,
         Verity:"dosa",    
         name:"podi dosa", 
         price:45,
         ratting:3.9,
         qty:1,
         sidedish:"masal vadai",
		 picture:"./images/biryani.jpg"
     },
     {
     
         id:9026246229,
         Verity:"idli",
         id:54331,
         name:"rava idli", 
         price:85, 
         ratting:3.1, 
         qty:1,
         sidedish:"masal vadai",
		 picture:"./images/biryani.jpg"
     },
     {
        id:543327977,
        Verity:"idli",
         name:"ragi idli",
         price:70, 
         ratting:3.9, 
         qty:1,
         sidedish:"medhu vadai",
		 picture:"./images/biryani.jpg"
     },
            
     {
         id:9026246230,
         Verity:"fride rice",
         name:"chicken fried rice",
         price:185, 
         ratting:4.9, 
         qty:1,
         sidedish:"onion and cucumber salad",
		 picture:"./images/biryani.jpg"
     },
   
    {
         id:9026246231,
         Verity:"parotta",
		 name:"kothu parotta", 
		 price:155, 
		ratting:3.3,
        qty:1,
		sidedish:"salad",
		picture:"./images/biryani.jpg"
     },
	 {
		 id:543465792,
		  Verity:"parotta",
		 name:"chilli parota", 
		 price:95, 
		 ratting:4.4, 
         qty:1,
		 sidedish:"salad",
		 picture:"./images/biryani.jpg"
	 },
    {
         id:9026246232,
         Verity:"noodles",
		 name:"cellophane noodles", 
		 price:155, 
		 ratting:2.9,
        qty:1,
		 sidedish:"onion and cucumber salad",
		 picture:"./images/biryani.jpg"
	},
	{
         id:546599347,
		 Verity:"noodles",
		 name:"rice noodles", 
		 price:125, 
		 ratting:1.9, 
        qty:1,
		 sidedish:"onion and cucumber salad",
		 picture:"./images/biryani.jpg"
     },
    {
         id:9026246233,
         Verity:"chicken",
		 name:"butter chicken", 
		 price:105, 
		 ratting:3.5, 
        qty:1,
		 sidedish:"mayonnaise",
		 picture:"./images/biryani.jpg"
	},
	{
		id:5435748352,
		Verity:"chicken",
		name:"chicken 65", 
		price:85, 
		ratting:4.4,
        qty:1,
		sidedish:"mayonnaise",
		picture:"./images/biryani.jpg"
             
     },
    {
         id:9026246234,
         Verity:"chapati", 
		 name:"beetroot chapati", 
		 price:195, 
		 ratting:1.9, 
        qty:1,
		 sidedish:"bread halwa",
		 picture:"./images/biryani.jpg"
	},
    {
		id:5591264357,
		Verity:"chapati",
		name:"gari chapati", 
		price:85, 
		ratting:2.9, 
        qty:1,
		sidedish:"sweet beeda",
		picture:"./images/biryani.jpg" 	
             
     }
 ];
// let cartItem=[];


        // function addcart(id){
    // let findcart=cartItem.find(function(item){
    // return item.id === id;
// });


// if(findcart){
    // let updatecart=cartItem.map(function(item){
        // if(item.id===id){
            
            // item.qty +=1;
			// item.totalprice=item.price*item.qty;
            // return item;
        // }

        // else{
           // return item; 
        // }
    // });

    // cartItem=updatecart;
    // console.log(cartItem);
// }

// else{
    // let findData=food.find(function(item){
        // return item.id===id;
    // });

     // findData.qty=1;
	 // findData.totalprice=findData.price*findData.qty;
    // cartItem.push(findData);
    // console.log(cartItem);
// }
    // };

        

            // function decrement(id){
    // let checkData=cartItem.find(function(item){
    // return item.id === id;
// });


// if(checkData.qty===1){
    // let updatecart=cartItem.filter(function(item){
        // return item.id !== id;
    // })
            
            // cartItem = updatecart;
            // console.log(cartItem)
// }

        // else{
            // let lesscountData = cartItem.map(function(item){
                // if(item.id === id){
                    // item.qty -=1;
					// item.totalprice=item.price*item.qty;
                    // return item;
                // }
                // else{
                    // return item;
                // }
            // })

                // cartItem = lesscountData;
                // console.log(cartItem)
        // }
         // }

					// addcart(5591264357)
 
 
 
 
 
/*let find=food.filter(function(check){
    return "biriyani" === check.Verity
});
    console.log(find)
	
	
	
 (2) [{…}, {…}]
0
: 
{id: 9026246227, Verity: 'biriyani', name: 'Sukkubhai Biryani', price: 195, ratting: 3.9, …}
1
: 
{id: 543224765, Verity: 'biriyani', name: 'dhonne biriyani', price: 185, ratting: 4.9, …}
length
: 
2
[[Prototype]]
: 
Array(0)


/*for(let y=0; y<food.length; y++){
    if("biriyani"==food[y].Verity){
    console.log(food[y].Verity);
    }
}/*
 */
 
 /* ========================================================================================================================================= */

let foods_elm=document.getElementById("row")

let cartItem=[];


 food.forEach(function(elements,index){
	 
	 
 let container_x=document.getElementById("container");
 let rows=document.getElementById("row");
 let contents=document.createElement("div");
 let cards=document.createElement("div");
 let imgs=document.createElement("img"); 
 
 //
 let title=document.createElement("h4");
  title.innerText=elements.Verity;
 let title2 =document.createElement("h3");
  title2.innerText=elements.name;
 let title3 =document.createElement("h3");
  title3.innerText=elements.price;
 let title4 =document.createElement("h4");
  title4.innerText=elements.ratting;
 let title5 =document.createElement("h4");
  title5.innerText=elements.sidedish;
  
  
 let but_elm=document.createElement("Button");
 but_elm.innerText="addcart";
 but_elm.setAttribute("class","Button");
 
 let removebut=document.createElement("Button");
 removebut.innerText="decrement";
 removebut.setAttribute("class","Button");
 
 
 
 //

 cards.append(imgs,title,title2,title3,title4,title5,but_elm,removebut);
 cards.setAttribute("class","card");
 contents.appendChild(cards);
 contents.setAttribute("class","flex-item-4");
 rows.appendChild(contents);
 container_x.appendChild(rows);
 but_elm.onclick=addcart.bind(null,elements.id);
 removebut.onclick=decrement.bind(null,elements.id);
 
 //
 imgs.src=elements.picture;
 //
 

 
 })
 
 
 


        function addcart(id){
    let findcart=cartItem.find(function(item){
    return item.id === id;
});
 
 if(findcart){
    let updatecart=cartItem.map(function(item){
        if(item.id===id){
            
            item.qty +=1;
			item.totalprice=item.price*item.qty;
            return item;
        }

        else{
           return item; 
        }
    });

    cartItem=updatecart;
    console.log(cartItem);
}

else{
    let findData=food.find(function(item){
        return item.id===id;
    });

     findData.qty=1;
	 findData.totalprice=findData.price*findData.qty;
    cartItem.push(findData);
    console.log(cartItem);
}
    };

 
 
  function decrement(id){
    let checkData=cartItem.find(function(item){
    return item.id === id;
});


if(checkData.qty===1){
    let updatecart=cartItem.filter(function(item){
        return item.id !== id;
    })
            
            cartItem = updatecart;
            console.log(cartItem)
}

        else{
            let lesscountData = cartItem.map(function(item){
                if(item.id === id){
                    item.qty -=1;
					item.totalprice=item.price*item.qty;
                    return item;
                }
                else{
                    return item;
                }
            })

                cartItem = lesscountData;
                console.log(cartItem)
        }
         }
 
 
 
 