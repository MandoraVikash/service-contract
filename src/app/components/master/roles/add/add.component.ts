import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { event } from 'jquery';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class RolesAddComponent {

  submitted = false;

  addRoles: FormGroup
  constructor() {
    this.submitted = false
    this.addRoles = new FormGroup({
    });
  }


  data = [
    {
      name: 'Master',
      children: [
        {
          name: 'Master',
          children: [{
            name: 'User',
            children: [{
              name: 'Add',
              children: [],
            }, {
              name: 'Edit',
              children: []
            }]
          }, {
            name: 'Roles',
            children: []
          }]
        }
      ]
    },
    { name: 'Stock' },
  ];

checkParents(el){
  console.log(el.parentElement)
}

  onCategoryChange(event: Event) {
      const el = event.target as HTMLInputElement;

if(el.parentElement.nextElementSibling){
  console.log("has child nodes")
}

      // console.log(el.parentElement.nextElementSibling.children)
      // console.log(el.parentElement.nextSibling)
      // console.log(el.parentElement.nextElementSibling)

      if(el.parentElement.nextElementSibling == null){
        console.log("last child")
        this.checkParents(el)
      }
  }



// -------------------------------------------------------------
  // @ViewChild('categories') categories: ElementRef;
  // @ViewChild('subcategories') subcategories: ElementRef;

  // selectAllChildren(element: HTMLInputElement) {
  //   element.parentElement.classList.remove('partial')
  //   if (element.parentElement.nextElementSibling != null) {
  //     const children = Array.from(element.parentElement.nextElementSibling.children)
  //     children.forEach(el => {
  //       const checkBox = el.firstChild.firstChild as HTMLInputElement
  //       checkBox.checked = element.checked
  //       this.selectAllChildren(checkBox);
  //     });
  //   } else {
  //     console.log("no children present");
  //   }

  // }

  // selectAllParent(element: HTMLInputElement) {
  //   console.log("Element:", element)
  //   if (!element.parentElement.classList.contains('filter-level')) {
  //     const parent = element.parentElement.parentElement.parentElement.previousElementSibling;
  //     // parent.classList.add('partial')
  //     if (parent) {
  //       console.log(parent.firstChild);
  //       this.selectAllParent(<HTMLInputElement>parent.firstChild)
  //     }
  //   } else {
  //     console.log("no parent")
  //   }
  // }



  // onCategoryChange(event: Event) {

  //   const element = event.target as HTMLInputElement;

  //   //  Check all its Children
  //   this.selectAllChildren(element);
  //   this.selectAllParent(element)



  //   // Check is all its siblings check or not 

  //   const siblings = Array.from(element.parentElement.parentElement.parentElement.children)
  //   let flag = true;
  //   let allUnchecked = true
  //   siblings.forEach(el => {
  //     const checkBox = el.children[0].children[0] as HTMLInputElement
  //     if (checkBox.checked == false) {
  //       flag = false
  //     } else {
  //       allUnchecked = false
  //     }
  //   })


  //   if (!element.parentElement.parentElement.classList.contains('first-level')) {
  //     const parent = element.parentElement.parentElement.parentElement.previousElementSibling.children[0] as HTMLInputElement

  //     flag ? (parent.parentElement.classList.remove('partial'), parent.checked = true) : (parent.parentElement.classList.add('partial'),
  //       parent.checked = false);

  //     if (allUnchecked) {
  //       const parent = element.parentElement.parentElement.parentElement.previousElementSibling.children[0] as HTMLInputElement
  //       parent.parentElement.classList.remove('partial')
  //     }

  //   }
  // }


// -----------------------------------------------------



  // const subCategory = Array.from(element.parentElement.parentElement.nextElementSibling.children);
  // console.log(subCategory)
  // const subCategory = Array.from(element.nextElementSibling.querySelectorAll('.subcategory'));
  // subCategory.forEach((el: HTMLInputElement) => {
  //   // console.log(el)
  //  el.children[0]['checked'] = element.checked;
  // });
  // }

  // const category = element.parentElement.parentElement.previousElementSibling.children[0] as HTMLInputElement;
  // category['checked'] = false;

  // onSubCategoryChange(event: Event) {
  //   const element = event.target as HTMLInputElement;
  //   const category = element.parentElement.parentElement.previousElementSibling.children[0] as HTMLInputElement;
  //   category['checked'] = false;
  // }

  onSubmit() {
    this.submitted = true
    console.log(this.addRoles.value);

    if (this.addRoles.invalid) {
      return;
    }
  }
}
