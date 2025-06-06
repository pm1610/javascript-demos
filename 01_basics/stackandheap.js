/*Stack nad Heap is Memeory*/
/*Primitive Datatype always store in Stack*/
/*Non Primitive Datatype always Heap in Stack*/

// Non Primitive value save in Stack
let myoldyoutubename = "sunriseweb";
let anothername = myoldyoutubename;
anothername = "frontend developer"
console.log(anothername);
console.log(myoldyoutubename);



// Non Primitive value save in Heap
let carDetails = {
    name : "Tesla",
    Type : "Electric",     
    price: "1-caror",
    cubicCapacity : 1200,
}

let carDetails2 = carDetails;
carDetails2.Type = "Safari";
console.log(carDetails2);
