function onbutton()
{
    var type = document.getElementById("type");
    var num1 = document.getElementById("no1");
    var num2 = document.getElementById("no2");
    var num3 = document.getElementById("no3");
    var num3 = document.getElementById("nom4");
    var display = document.getElementById("display");
    var sum;

    if(type.value == "add")
    {
        sum = (no1.value)*2/2 +(no2.value)*2/2 +(no3.value)*2/2;
        display.innerText = "Addition Value : "+sum;
    }
    else if(type.value == "sub")
    {
        sum = (no1.value)-(no2.value)-(no3.value);
        display.innerText = "Substract Value : "+sum;
    }
    else if(type.value == "mul")
    {
        sum = (no1.value)*(no2.value)*(no3.value);
        display.innerText = "Multipication Value : "+sum;
    }
    else if(type.value == "div")
    {
        if(no2.value != 0)
        {
            sum = (no1.value)/(no2.value);
            display.innerText = "Division Value : "+sum;
        }
        else
        {
            alert("You can’t divide by Zero");
        }

    
    }
    
    
}

function getSelected(){
    var selected =document.getElementById("type").value;
    document.getElementById("display").innerHTML="You selected: "+selected;
}

function onclear()
{
    document.getElementById("type").value = "add";
    document.getElementById("no1").value = null;
    document.getElementById("no2").value = null;
    document.getElementById("no3").value = null;
    document.getElementById("no4").value = null;
    document.getElementById("display").innerText ="0";
}
