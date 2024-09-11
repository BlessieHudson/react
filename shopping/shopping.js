fetch("shopping.json")
    .then(data=>data.json())
    .then(item=>{
        // console.log(item);
        // console.log(item.products[0].Name)
        let items=item.products
        for(items=0;items<)
        let img1=document.getElementById("img1")
        img1.innerHTML=items[0].Image
        let title1=document.getElementById("title1")
        title1.innerHTML=items[0].Name
        let price1=document.getElementById("title1")
        price1.innerHTML=items[0].Price
        let discount1=document.getElementById("title1")
        discount1.innerHTML=items[0].Discount


        let itemArray=localStorage.getItem("newItem")?JSON.parse(localStorage.getItem("newItem")):[]
        itemArray.push(item)
        localStorage.setItem("newItem",JSON.stringify(itemArray))
        console.log(itemArray)
    })
