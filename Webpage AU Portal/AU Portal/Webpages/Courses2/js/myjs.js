
var counterArray = ['cont1', 'cont2', 'cont3'];
function setVisibility(id) 
{
	for(var con =0; con<3; con++) 
	{
		if(id === counterArray[con]){
			document.getElementById(counterArray[con]).style.display = 'inline';
			
		}
		else{
			document.getElementById(counterArray[con]).style.display = 'none';
		}
		
	}	
}
			
$(function () {
    $('.narrowDetails').on('click', 'details', function () {
        $('details').removeAttr('open');
      //  $(this).attr('open', '');
    });
});



var summary1Array = ['summ1-1','summ1-2','summ1-3'];
function setSummary1() 
{
	var e = document.getElementById("select1").selectedIndex;
//	var id = e.options[e.selectedIndex].index;
	for(var con =0; con<3; con++) 
	{
		if(e === con){
			document.getElementById(summary1Array[con]).style.display = 'block';
		}
		else{
			document.getElementById(summary1Array[con]).style.display = 'none';
		}
	}	
}



var summary2Array = ['summ2-1','summ2-2','summ2-3'];
function setSummary2() 
{
		var e = document.getElementById("select2").selectedIndex;
//	var id = e.options[e.selectedIndex].index;
	for(var con =0; con<3; con++) 
	{
		if(e === con){
			document.getElementById(summary2Array[con]).style.display = 'block';
		}
		else{
	document.getElementById(summary2Array[con]).style.display = 'none';
		}
	}		
}


var summary3Array = ['summ3-1','summ3-2','summ3-3' ];
function setSummary3() 
{	
	var e = document.getElementById("select3").selectedIndex;
//	var id = e.options[e.selectedIndex].index;
	for(var con =0; con<3; con++) 
	{
		if(e === con){
			document.getElementById(summary3Array[con]).style.display = 'block';
		}
		else{
			document.getElementById(summary3Array[con]).style.display = 'none';
		}
	}	
}



//------------------------------Toggle button code
			
$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});

$('form').submit(function(){
	alert($(this["options"]).val());
    return false;
});

var switchArray = ['switch1', 'switch2', 'switch3'];
function setVisibilityBox(id) 
{
	if(id === switchArray[0])
	{

		if(document.getElementById("myonoffswitch1").checked === true)
		{
			document.getElementById("tab1-2").style.display = 'inline';
			document.getElementById("tab1-1").style.display = 'none';
		}
		
		if(document.getElementById("myonoffswitch1").checked === false){ 
			document.getElementById("tab1-2").style.display = 'none';
			document.getElementById("tab1-1").style.display = 'inline';
		}
	}
	else if(id === switchArray[1])
	{
		if(document.getElementById("myonoffswitch2").checked === true)
		{
			document.getElementById("tab2-2").style.display = 'inline';
			document.getElementById("tab2-1").style.display = 'none';
		}
		
		if(document.getElementById("myonoffswitch2").checked === false){ 
			document.getElementById("tab2-2").style.display = 'none';
			document.getElementById("tab2-1").style.display = 'inline';
		}
	}
	else if(id === switchArray[2])
	{
		if(document.getElementById("myonoffswitch3").checked === true)
		{
			document.getElementById("tab3-2").style.display = 'inline';
			document.getElementById("tab3-1").style.display = 'none';
		}
		if(document.getElementById("myonoffswitch3").checked===false){ 
			document.getElementById("tab3-2").style.display = 'none';
			document.getElementById("tab3-1").style.display = 'inline';
			getele
		}
	}
}	