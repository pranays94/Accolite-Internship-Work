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
var diaryTagIdArray = ['diaryJ1', 'diaryJ2', 'diaryN1'];
function diaryTag(id)
{
	for(var i=0;i<3;i++)
	{
		if(id === diaryTagIdArray[i])
		{
			document.getElementById(diaryTagIdArray[i]).style.zIndex = 3;
			document.getElementById(diaryTagIdArray[i]).style.opacity = 1;
			document.getElementById(diaryTagIdArray[i]).style.width = "7%";
			document.getElementById(diaryTagIdArray[i]).style.right = "-7%";
		}
		else
		{
			document.getElementById(diaryTagIdArray[i]).style.zIndex = 1;
			document.getElementById(diaryTagIdArray[i]).style.opacity = 0.7;
			document.getElementById(diaryTagIdArray[i]).style.width = "5%";
			document.getElementById(diaryTagIdArray[i]).style.right = "-5%";
		}
	}
}

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



///////////////////////////////TOGGLE SWITCH FUNCTIONALITY
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
		}
	}
}	



//////////////// Search Box Functionality

 $(function() {
        var courses = ["Course1", "Course2", "Course3"];
        var links = ["#course1", "#course2", "#course3"];
        var narrowDetails = ["narrowDetails1", "narrowDetails2", "narrowDetails3"]
        $("#tags").autocomplete({
            source: courses,
            focus: function(event, ui) {
                //$( "#tags" ).val( ui.item.label );
                return false;
            },

            autoFocus: true,
            selectFirst: true,
			
            select: function searchContent(event,ui) {
                for (var con = 0; con < 3; con++) {
					var val=ui.item.value;
                    if (val === courses[con]) {
                        $(links[con]).click();
						if(con === 0) {
							$('details').removeAttr('open');
							document.getElementById("narrowDetails1").setAttribute('open',true);
							
						}
						else if(con === 1) {
							$('details').removeAttr('open');
							document.getElementById("narrowDetails2").setAttribute('open',true);
							
						}
						if(con === 2) {
							$('details').removeAttr('open');
							document.getElementById("narrowDetails3").setAttribute('open',true);
							
						}
                    }
                }
            },
//			response: function(event,ui) {
	//			if (ui.content.length === 1)
		//		{
			//		ui.item = ui.content[0];
				//	$(this).data('ui-autocomplete')._trigger('select', 'autocompleteselect', ui);
	//				$(this).autocomplete('close');
		//	    }
			//}
		
		});
		//////////////////////////////////////////
	/*	$("#tags").live("blur", function(event) {
			var autocomplete = $(this).data("autocomplete");
			var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i");
			var myInput = $(this);
			autocomplete.widget().children(".ui-menu-item").each(function() {
				//Check if each autocomplete item is a case-insensitive match on the input
				var item = $(this).data("item.autocomplete");
				if (matcher.test(item.label || item.value || item)) {
					//There was a match, lets stop checking
					autocomplete.selectedItem = item;
					return;
				}
			});
			//if there was a match trigger the select event on that match
			//I would recommend matching the label to the input in the select event
			if (autocomplete.selectedItem) {
				autocomplete._trigger("select", event, {
					item: autocomplete.selectedItem
				});
			//there was no match, clear the input
			} else {
				$(this).val('');
			}
		});*/
});

/*
(function( $ ) {

$.ui.autocomplete.prototype.options.autoSelect = true;
$( ".ui-autocomplete-input" ).live( "blur", function( event ) {
    var autocomplete = $( this ).data( "autocomplete" );
    if ( !autocomplete.options.autoSelect || autocomplete.selectedItem ) { return; }

    var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" );
    autocomplete.widget().children( ".ui-menu-item" ).each(function() {
        var item = $( this ).data( "item.autocomplete" );
        if ( matcher.test( item.label || item.value || item ) ) {
            autocomplete.selectedItem = item;
            return false;
        }
    });
    if ( autocomplete.selectedItem ) {
        autocomplete._trigger( "select", event, { item: autocomplete.selectedItem } );
    }
});

}( jQuery ));
*/