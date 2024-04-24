
/**
 * create html
 */
function CreateHTML() {

    // let ele_p = document.getElementById("Panel");
    

    // 类型，id,class,文本,自定义属性,子元素
    //element type,id,classname,text content,Attributes
    // CE({element type,id,classname,text content,Attributes},[childrens]);
    //CE(ele_arrt={type:"div", id : "", cn :"", text : "", attr : {}}, childrens =[{}])


    let json=[

        CE({id:"Panel"}, [

            CE({cn:"cn1",text:"1"}),
            CE({cn:"cn1",text:"2"}),
            CE({cn:"cn1",text:"3"}),

            CE({},[
                CE({},[
                CE({type:"img",id:"img1",attr:{"src":"../images/i.png"}}),
                CE({type:"input",attr:{"name":"n1"}}),
                ]),
            ]),

        ]),
        
          //div
         // CE(),
      
    ]
    let parent_node = document.getElementsByTagName("body")[0];
    CreateELE(json, parent_node);


}

CreateHTML()