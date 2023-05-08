$('document').ready(function(){
	
	var hoogte = window.innerHeight;

	var cont = [];
	var i;

	var klas = 'column';
	var ide;

	for (i = 0; i < 8; i++) {
		var getal = i + 1;
		var ide = 'col-' + getal; 
		cont[i] = '<div id="' + ide + '" class="' + klas + '"><iframe class="' + ide + '"></iframe></div>';
	}

	var info = '<div id="info"></div>';

	$('body').append(info);
	$('body').append(cont);
	

	$('#info').append('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSJiyE0DvBxNYFxTpHNUXpGoKIvMkw-YrG44w2QTsnahrGOmOVCO6D2KBgVm1LBFbIt44EaooeGVWM9/pub?embedded=true"></iframe>');

	$('.column').mouseenter(function(){
		$(this).css('width', '50%');
		$('#info').css('width', '6.25%');
	});
	$('.column').mouseleave(function(){
		$(this).css('width', '6.25%');
		$('#info').css('width', '50%');
	});

	$('.column').css('height', hoogte);
	$('#info').css('height', hoogte);

	$('iframe').each(function(){
		
		var frameClass = $(this).attr('class');

		if (frameClass === 'col-1') {
			// Unpredictable Atmosphere
			var project = ['https://docs.google.com/document/d/e/2PACX-1vRN4enFu0v7pqTipwmW1O9N6kPvO8Jndvkh9Lxl74KDdVTvPcBzHfpvHs4LQbtGT4t62vEIJMcMgSU3/pub?embedded=true'];
		} else if (frameClass === 'col-2') {
			// Cloud Machine
			var project= ['https://docs.google.com/document/d/e/2PACX-1vRniq7Ab8XNmw3Y9I1-lZUIIbo8tR1kWJOJs0-jACxrbKM2i7HlvbUEaK0l2DtU8UgnsTAf-13cpkhP/pub?embedded=true'];
		} else if (frameClass === 'col-3') {
			// Drawing Machine
			var project= ['https://docs.google.com/document/d/e/2PACX-1vSCgbF4i8QiYtCeM7FDECmuoub9jC_VHl_0ApXjrRJZirTiFmxEoWhLFwB31wBac74h9NybGDLOzcs1/pub?embedded=true'];
		} else if (frameClass === 'col-4') {
			// Polar Opacity
			var project = ['https://docs.google.com/document/d/e/2PACX-1vQaDLS_fsaJSlMxfTB-QCjXxB0NqImto8sahd1jzOwd152VKidZOLCPmP1DAHJH55D33Vcg4nrS3imo/pub?embedded=true'];
		} else if (frameClass === 'col-5') {
			// Performative Calligraphies
			var project = ['https://docs.google.com/document/d/e/2PACX-1vSmicw7nNSKdZKv-BeuD1II5QvdwlVM3OH7teFD-L0mek3B3nzIq3W1fL9CPkpod9tTo_oYKTaHjSBF/pub?embedded=true'];
		} else if (frameClass === 'col-6') {
			// Scrolling Atmosphere
			var project = ['https://docs.google.com/document/d/e/2PACX-1vS3GEtp8Lb0pe8r6PAO8YQlo2yJs5ot51M3ev8gHNeuVJLytNblkAL8bBs8gsHthrqG7zR59VcYHblb/pub?embedded=true'];
		} else if (frameClass === 'col-7') {
			// Bluedot
			var project= ['https://docs.google.com/document/d/e/2PACX-1vSmaaLXQya8VKyv3C1JdW6rkqNWh1FCsJNAihrRo5VkHqzdekK_k2BtB0ffMxq45Oz70kNaZkZS9dF0/pub?embedded=true'];
		} else if (frameClass === 'col-8') {
			// Eye
			var project = ['https://docs.google.com/document/d/e/2PACX-1vTAEFDLHfzJdquIhCTbl7IYxMgdfeuLF9_Z62w_0npVHF_EXOVRqGsMApb_YKGnFW17BO-jxy7G0OEG/pub?embedded=true'];
		} 
		
		$(this).attr('src', project);
	
	});

});







