import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  item = [
    {code:"20", name: "Item A",type:'Goods',category:"Category A", group:"Group A",unit:"1", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    {code:"38", name: "Item B",type:'Service',category:"Category B", group:"Group B",unit:"2", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    {code:"19", name: "Item A",type:'Goods',category:"Category A", group:"Group A",unit:"1", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    {code:"48", name: "Item C",type:'Goods',category:"Category C", group:"Group C",unit:"3", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    {code:"45", name: "Item A",type:'Goods',category:"Category A", group:"Group A",unit:"1", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    {code:"68", name: "Item C",type:'Goods',category:"Category C", group:"Group C",unit:"3", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
  ];

  getAllItems(){
    return this.item.slice();
  }

  constructor() { }
}
