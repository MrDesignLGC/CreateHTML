//根据id得到元素
function GetID(id) {
    return document.getElementById(id);
};


//根据类名得到元素
function GetClass(n) {
    return document.getElementsByClassName(n);
};


/**
 * 类型，id,class,文本,自定义属性,子元素json
 * [EJ("div", "a03", "a", "02")]
 */
function CE(ele_arrt={type:"div", id : "", cn :"", text : "", attr : {}}, elejson =[{}]) {

    if(ele_arrt.type==undefined){
        ele_arrt.type="div";
    }
    if(ele_arrt.id==undefined){
        ele_arrt.id="";
    }
    if(ele_arrt.cn==undefined){
        ele_arrt.cn="";
    }
    if(ele_arrt.text==undefined){
        ele_arrt.text="";
    }
    if(ele_arrt.attr==undefined){
        ele_arrt.attr={};
    }

    let ele_json = {
        "type": ele_arrt.type,
        "id": ele_arrt.id,
        "class": ele_arrt.cn,
        "text": ele_arrt.text,
        "child": elejson,
        "attribute": ele_arrt.attr
    }

    return ele_json;

}

/**
 * 通过json创建元素
 * json(EJ创建),父级
 */
function CreateELE(json, parent) {


    for (const key in json) {

        //过滤掉attribute
        if (key != "attribute") {

            const item = json[key];

            if (typeof (item) == "object") {

                if (Object.keys(item).length != 0) {

                    if (key == "child") {
                        CreateELE(item, parent);
                    } else {

                        //创建元素
                        let ele = Create_Element(item.type, parent, item.id, item.class);

                        //设置属性
                        let attr = item.attribute;
                        let attr_length = Object.keys(attr).length;
                        if (attr != undefined && attr != "" && attr_length != 0) {
                            for (const k in attr) {
                                ele.setAttribute(k, attr[k])
                            }
                        }

                        //设置文本
                        if (item.text != "" && item.text != undefined) {
                            AddText(ele, item.text);
                        }
                        //创建元素后将item递归处理
                        CreateELE(item, ele);

                    }

                }

            } else {


            }

        }

    }


}





//*********************************************** */
//创建元素
//元素名 父类 id class
//*********************************************** */
function Create_Element(E_name, parent_ele, id, class_n) {

    try {


        var ele = document.createElement(E_name);


        if (id != undefined && id != "") {
            ele.id = id;
        }

        if (class_n != undefined && class_n != "") {
            ele.className = class_n;
        }

        parent_ele.appendChild(ele);

        return ele;

    } catch (error) {
        throw "err:001:" + error;
    }

}


//为元素添加或修改文本
function AddText(ELE, v) {

    if (ELE.childNodes.length == 1) {
        ELE.firstChild.nodeValue = v;

    } else if (ELE.childNodes.length == 0) {
        let tempText = document.createTextNode(v);

        ELE.appendChild(tempText);

    }

};



/* module.exports = {
    GetID,
    GetClass,
    CreateELE,
    CE,
    Create_Element,
    AddText
} */

