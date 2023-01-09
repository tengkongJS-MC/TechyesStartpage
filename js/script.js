document.getElementById("enter").style.display = "none";
buttonIsShow = false;
document.getElementById("inputMain").addEventListener("mouseover", function(){
    document.querySelector(".buttonBox").style.transform = "scale(1)";
});

document.getElementById("inputMain").addEventListener("focusin", function(){
    document.getElementById("enter").style.display = "flex";
});

document.getElementById("inputMain").addEventListener("blur", function(){
    document.getElementById("enter").style.display = "none";
});

document.querySelector(".buttonBox").addEventListener("mouseover", function(){
    document.querySelector(".buttonBox").style.transform = "scale(1)";
});
document.querySelector(".buttonBox").addEventListener("mouseout",function(){
    document.querySelector(".buttonBox").style.transform = "scale(0)";
});
document.getElementById("inputMain").addEventListener("mouseout",function(){
    document.querySelector(".buttonBox").style.transform = "scale(0)";
});

function searchesOpen(temp){
    a = document.querySelector(".searches");
    if(temp === true){
        a.style.transform = "translate(-50%)";
        a.style.bottom = "20px";
    }else{
        a.style.transform = "scale(0)";
        a.style.bottom = "-300px";
    }
};

function jxToGoOpen(temp){
    a = document.querySelector(".jxToGo");
    if(temp === true){
        a.style.transform = "translate(-50%,50%) scale(1)";
    }else{
        a.style.transform = "translate(-50%,50%) scale(0)";
    }
}

let searcher = "https://cn.bing.com/search?q="
function changeSearcher(name,outText){
    searcher = name;
    document.getElementById("show").innerHTML = "您当前选择的是：" + outText;
    console.log(searcher);
}

function startSearch(){
    let text = document.getElementById("inputMain").value;
    window.location.href = searcher + text;
}

function fanyi(){
    let text = document.getElementById("inputMain").value;
    window.location.href = 'https://fanyi.baidu.com/#en/zh/' + text;
}

function about(){
    alert("没有什么关于\n开发者：TengKong@野生技协\n捷径来源：Zhilu 野生技协导航\n没了awa")
}