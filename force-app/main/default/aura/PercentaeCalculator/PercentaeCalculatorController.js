({
	doclick : function(component, event, helper) {
		alert(component.isValid());
        alert(component.getName());
        
        var agecomp =component.find('testInput');
        alert(agecomp.get('v.value'));
        agecomp.set('v.value',68);
        
        
	}
})