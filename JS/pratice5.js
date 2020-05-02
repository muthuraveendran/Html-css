var data = [
  {
    id: "1",
    title: "Inbox",
    icon: "fas fa-inbox",
    active: false,
    todos: [],
  },
  {
    id: "2",
    title: "Today",
    icon: "far fa-star",
    active: false,
    todos: [],
  },
  {
    id: "3",
    title: "Upcoming",
    icon: "far fa-calendar-alt",
    active: true,
    todos: [],
  },
  {
    id: "4",
    title: "Completed",
    icon: "fas fa-check",
    active: false,
    todos: [],
  },
  {
    id: "5",
    title: "Trash",
    icon: "fas fa-trash",
    active: false,
    todos: [],
  },
  {
    id: "3412341487129469128649812",
    title: "Everdo",
    icon: "fas fa-bars",
    active: false,
    todos: [],
  },
];




var  staticIcon = {
  circle:'fas fa-check-circle',
  times:'fas fa-times',
  greater:'fas fa-greater-than',
  calendar:'far fa-calendar',
  tag:'fas fa-tag',
  search:'fas fa-search',
  download:'fas fa-download',
};

var  footerFunction = {
  circle:'circle()',
  times:'times()',
  greater:'greater()',
  calendar:'calendar()',
  tag:'tag()',
  search:'search()',
  download:'download()',
};

let popUpData = [{
  title:"Title",
  description:"Decription",
  command:"Commands",
}];

let popupButton = [{
  save:"Save",
  cancel:"Cancel",
}];

function footerIcon(){
let parentElement = document.createElement('ul');

Object.values(staticIcon).map(function(data){
  console.log(">>>>>>>>>>>>>>>>>>>>>data>>>>>>>>>>>>>>>footer function>>>>>>>>>",data);



let tickli = document.createElement('li');
let tickIcon = document.createElement('i');
tickIcon.setAttribute('class',data);//staticIcon.tick  'fas fa-check-circle'
tickIcon.setAttribute('onclick',"sd");

tickli.appendChild(tickIcon);
parentElement.appendChild(tickli);
document.getElementById('main-foot').appendChild(parentElement);
})

let footerAddDiv = document.createElement('div');
let aTag = document.createElement('a');
aTag.setAttribute('href','#mainPopup')
let footerAddIcon = document.createElement('i');
footerAddDiv.setAttribute('class','footer-add-btn');
footerAddDiv.setAttribute('id','fot-ad-btn');
footerAddDiv.setAttribute('onclick','createMainMenuPopup()')
footerAddIcon.setAttribute('class','fas fa-plus-circle');
footerAddDiv.appendChild(footerAddIcon);
aTag.appendChild(footerAddIcon);
footerAddDiv.appendChild(aTag);
parentElement.appendChild(footerAddDiv);
document.getElementById('main-foot').appendChild(parentElement);
}

function mainMenuPopup(){
  let parentPopup = document.createElement('div');
  let childElement = document.createElement('span');
  parentPopup.setAttribute('class','main-footer-popup');
  parentPopup.setAttribute('id','fot-btn-popup');
  childElement.setAttribute('class','mainPopupClose');
  childElement.setAttribute('onclick','closeMainPopup()');
  let childText = document.createTextNode('X'); //createTextNode
  childElement.appendChild(childText);
  parentPopup.appendChild(childElement);
    document.querySelector('.main-cotent').appendChild(parentPopup);//
  // document.querySelector('.main-content').appendChild(parentPopup);//task-selected design-pattern
}



function mainMenuFormPopuup(){
  let parentElement = document.createElement('div');
  parentElement.setAttribute('class','form-input-field');
  // Object.values(popUpData).map(function(popData){
   popUpData.map(item => {
     Object.values(item).map( popData =>{
       console.log(">>>>>>>>>>>>>Kosal>>>>>>>>>>>>>>>>>>>>>", popData);
       let childElementLabel = document.createElement('label');
       let childElementInput = document.createElement('input');
       childElementInput.setAttribute('type','text');
       childElementInput.setAttribute('class','pop-text');
       childElementInput.setAttribute('id',popData);
       let childText = document.createTextNode(popData);
       childElementLabel.appendChild(childText);
       parentElement.appendChild(childElementLabel);
       parentElement.appendChild(childElementInput);
       document.querySelector('.main-footer-popup').appendChild(parentElement);//main-cotent
      document.querySelector('.main-cotent').appendChild(parentElement);//

     });
   });//popupButton
   popupButton.map( button =>{
     Object.values(button).map( buttonText =>{
   let button = document.createElement('input');
   button.setAttribute('type','button');
   button.setAttribute('class','pop-btn');
    button.setAttribute('onclick',`${buttonText}MainPopBtn()`);
   button.setAttribute('value',buttonText);
   parentElement.appendChild(button);
   document.querySelector('.main-footer-popup').appendChild(parentElement);
  // document.querySelector('.main-cotent').appendChild(parentElement);//main-cotent

  })
})
}

let popupData = [];

function SaveMainPopBtn(){
  let mainHeading = document.getElementById("text-display").innerText;
 let title = document.getElementById('Title').value;
 console.log("The title is>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"  );
 let decription = document.getElementById('Decription').value;
 let commands = document.getElementById('Commands').value;
// if(!'undefined'){
  let d = {title , decription, commands}
// }
 

 popupData.push(d);


 data.map((item) =>{  console.log("The popup inside map title is dispalyed>>>>>>>>>>>>>>>>>>>>>>> title",item.title )

 if(item.title == mainHeading){
  item.todos.push(d);
  console.log(">>>>>>>>>>>new>>>>itemitemitem>>>>>>>>>>>>>>>data.title",item);
  console.log(d,">>>>>>>>data[0].todos>>>>>>>>>>>data[0].todos");
 }
})

 

//  popupData.map((d) =>{
//    console.log("The popup data title is dispalyed>>>>>>>>>>>>>>>>>>>>>>> title", d.title)
//  })
 mainInputClear();
}

function mainInputClear(){
    let title = document.getElementById('Title').value = "";
   let decription = document.getElementById('Decription').value = "";
   let commands = document.getElementById('Commands').value = "";
}

function createMainMenuPopup(){//main-content-data display-main-content
    console.log(">>>>>>>>>>>>>>>>>>Inside the CreateMainMenuPopup>>>>>>>>>>>>>>>>>>>>>>>popupData",data.length)
    if(popupData.length >= 1){
      // document.querySelector('.main-content-data').style.visibility='hidden';
    }
    document.querySelector('.main-footer-popup').style.width = '98.5%';//.main-cotent
    document.querySelector('.main-footer-popup').style.marginRight = '98.5%'//.main-cotent
    document.querySelector('.form-input-field').style.visibility = 'visible';//.main-cotent
    document.querySelector('.mainPopupClose').style.visibility = 'visible';

      // document.querySelector('.main-footer-popup').style.visbility='visible';
}

function closeMainPopup(){
  document.querySelector('.main-footer-popup').style.width = '0';//.main-cotent
  document.querySelector('.main-footer-popup').style.marginRight = '0'//.main-cotent
  document.querySelector('.form-input-field').style.visibility = 'hidden';//.main-cotent
  document.querySelector('.mainPopupClose').style.visibility = 'hidden';
}

function CancelMainPopBtn(){
  document.querySelector('.main-footer-popup').style.display='none';
  // document.querySelector('.main-footer-popup').style.visbility='hidden';

}



function loadFunction() {
  data.map(function (item) {
    createTaskUi(item);
    if(item.title == "Inbox") document.getElementById("text-display").innerText = item.title;

  });
  footerIcon();
  this.mainMenuPopup();
  this.mainMenuFormPopuup();
}
var parentElement, childElement;
function createTaskUi(item) {
  //functionality
  let parentElement = document.createElement("li");
  let childElement = document.createElement("span");
  let childImageTag = document.createElement("i");
  //Create a Text
  let textNodeSpan = document.createTextNode(item.title);
  // Set attribute
  let title = item.title.toString();
   childElement.setAttribute('onclick',`textChange(event,${item.id})`);
  childImageTag.setAttribute("class", item.icon);
  if (item.edit == true) {
    childElement.setAttribute("ondblclick", "this.contentEditable=true;");
    childElement.setAttribute("onfocusout", `focusOut(${item.id})`);
  }
  childElement.appendChild(textNodeSpan);
  parentElement.appendChild(childImageTag);
  parentElement.appendChild(childElement);
  parentElement.setAttribute("id", item.id);
  if (item.deleteIcon) {
    let parentButton = document.createElement("i");
    parentButton.setAttribute("class", item.deleteIcon);
    parentButton.setAttribute("name", item.id);
    parentButton.setAttribute("onclick", `deleteUiTask(event,${item.id})`);
    childElement.appendChild(parentButton);//
  }

  data.forEach((data)=>{
    if(data.id == item.id){
    }
  });
  document.getElementById("sideNav").appendChild(parentElement);
}


// function mainContentText(item , id){
//   if(item.id == id && item.todos.length>0){
//     document.getElementById("mainCont").innerText="";
//     let value =  item.todos.map((data)=>{
//      let parentMainElement = document.createElement('div');
//      parentMainElement.setAttribute('id','mainContentMainData');
//      parentMainElement.setAttribute('class','main-content-data display-main-content');
//      let spanTick = document.createElement('span');
//      spanTick.setAttribute('class','tick-mark');
//      let tickSymbol = document.createElement('i');
//      tickSymbol.setAttribute('class',`${data.tickIcon}`);
//      spanTick.appendChild(tickSymbol);
//      parentMainElement.appendChild(spanTick);

//      let spanDownload = document.createElement('span');
//      spanDownload.setAttribute('class','main-content-data-box');
//      let downloadSymbol = document.createElement('i');
//      downloadSymbol.setAttribute('class',`${data.mainIcon}`);
//      spanDownload.appendChild(downloadSymbol);
//      parentMainElement.appendChild(spanDownload);
 
//      let spanMainText = document.createElement('span');
//      let spanMainTextContent = document.createTextNode(data.textData);
//      spanMainText.appendChild(spanMainTextContent);
//      parentMainElement.appendChild(spanMainText);
 
//      if(data.hoverData){
//      let spanMainHiglightText = document.createElement('span');
//      spanMainHiglightText.setAttribute('id','work');
//      let spanMainTextContentHover = document.createTextNode(data.hoverData);
//      spanMainHiglightText.appendChild(spanMainTextContentHover);
//      parentMainElement.appendChild(spanMainHiglightText);
//      }
 
//      let createEllipsis = document.createElement('div');
//      createEllipsis.setAttribute('class','ellipsis');
//      let ellipsisIcon = document.createElement('i');
//      ellipsisIcon.setAttribute('class',`${data.sideEllipsis}`);
//      createEllipsis.appendChild(ellipsisIcon);
//      parentMainElement.appendChild(createEllipsis);
     
//      document.getElementById('mainCont').appendChild(parentMainElement);
 
//        // return data
//      });
//     }
//     if(item.todos.length<=0){
//           document.getElementById("mainCont").innerText="No Element Displayed !"
//     }
// }



function mainContentText(item , id){
  if(item.id == id && item.todos.length>0){
    document.getElementById("mainCont").innerText="";
    let value =  item.todos.map((todolist)=>{
     let parentMainElement = document.createElement('div');
     parentMainElement.setAttribute('id','mainContentMainData');
     parentMainElement.setAttribute('class','main-content-data display-main-content');
     console.log("The todolisttodolisttodolisttodolist>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",todolist)

     let spanDownload = document.createElement('span');
     spanDownload.setAttribute('class','main-cont');
     let spanTitle = document.createTextNode(todolist.title);
     spanDownload.appendChild(spanTitle);
     parentMainElement.appendChild(spanDownload);
 
     let spanMainText = document.createElement('span');
     spanMainText.setAttribute('class','main-cont');
     let spanMainTextContent = document.createTextNode(todolist.decription);
     spanMainText.appendChild(spanMainTextContent);
     parentMainElement.appendChild(spanMainText);

     let spanCommand = document.createElement('span');
     spanCommand.setAttribute('class','main-cont');
     let spanCommandDisplay = document.createTextNode(todolist.commands);
     spanCommand.appendChild(spanCommandDisplay);
     parentMainElement.appendChild(spanCommand);
 
     let createEllipsis = document.createElement('div');
     createEllipsis.setAttribute('class','ellipsis');
     let ellipsisIcon = document.createElement('i');
     ellipsisIcon.setAttribute('class','fas fa-ellipsis-h');
     createEllipsis.appendChild(ellipsisIcon);
     parentMainElement.appendChild(createEllipsis);
     
     document.getElementById('mainCont').appendChild(parentMainElement);
     
 
       // return data
     });
    }
//     if(item.id != id ){
//       console.log(">>>>>>>>>>>>>>>>>>..item block>>>>>>>>>",item.id)
//       document.getElementById("mainCont").innerText="No Data Dispalyed!"
// }
  //   item.todos.map((todolist)=>{
  //   if(item.todos.length<=0){
  //         document.getElementById("mainCont").innerText="No Data Dispalyed!"
  //   }
  // });
  console.log("mainform>>>>>>>>>>>>>>>>>>>>>>>>>>>>>data",data);
}






function deleteUiTask(ele, id, icon) {
  data = data.filter(data => data.id != id);
  document.getElementById(id).remove();
}


function clearTask() {
  document.getElementById("input-1").value = "";
}


//Text Change Function
function textChange(el,id){
 document.getElementById("text-display").innerText = el.target.innerText;
 
 data.map(function (item) {
  // createTaskUi(item);
  console.log("Inside the text Change function>>>>>>>>>>>>>>>>>>>>>>>>",id,">>>>>", typeof(id));
  console.log("Inside the text Change item.id>>>>>>>>>>>>>>>>>>>>>>>>",item.id);
  if(id == item.id){
    console.log(">>>>>>>>>>>>>>>>>>>if block>>>>>>Inside textChane>>>>>>>>>>",id);
    mainContentText(item, id)
  }

  
});
}

function focusOut(id){
  let newValue = document.getElementById(id).innerText;
  // // newValue.value;
  data.find(v => v.id == id).title = newValue;
      let title = data.title;
  }


  
function createTask() {
  titleInput = document.getElementById("input-1").value;
  newdata = {
    id: Date.now().toString(),
    title: titleInput,
    icon: "fas fa-bars",
    deleteIcon: "fas fa-minus-circle",
    active: false,
    todos: [],
    edit: true,
  };
  data.push(newdata);
  createTaskUi(newdata);
  this.clearTask();
}

/**
 *1.popup as sibling
 * 2.Make a inbox is highlight by default 
 *  */ 