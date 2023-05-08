$('document').ready(function(){
	
	var hoogte = window.innerHeight;

	var cont = [];
	var i;

	var klas = 'column';
	var ide;

	for (i = 0; i < 15; i++) {
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
		$('#info').css('width', '3.33333333%');
	});
	$('.column').mouseleave(function(){
		$(this).css('width', '3.33333333%');
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
			// Epigenetic Landscape
			var project = ['https://docs.google.com/document/d/e/2PACX-1vREfaP6mJ9Kc1xbYmu4SnZywwep3N5FP1VrZmRG-8_fs-OvA-I-Mzf57bzN7tepwwW0UDmosPxIlEwN/pub?embedded=true'];
		} else if (frameClass === 'col-3') {
			// Cloud Machine
			var project= ['https://docs.google.com/document/d/e/2PACX-1vRniq7Ab8XNmw3Y9I1-lZUIIbo8tR1kWJOJs0-jACxrbKM2i7HlvbUEaK0l2DtU8UgnsTAf-13cpkhP/pub?embedded=true'];
		} else if (frameClass === 'col-4') {
			// Drawing Machine
			var project= ['https://docs.google.com/document/d/e/2PACX-1vSCgbF4i8QiYtCeM7FDECmuoub9jC_VHl_0ApXjrRJZirTiFmxEoWhLFwB31wBac74h9NybGDLOzcs1/pub?embedded=true'];
		} else if (frameClass === 'col-5') {
			// Bordo Clima book
			var project = ['https://docs.google.com/document/d/e/2PACX-1vTU0-N6QLi1wIryL-QC5wXZzjTsBsl00LgK3HRXvYubYbKUjONcZGLy8W32F40bw04p2HJXOJh7YXiL/pub?embedded=true'];
		} else if (frameClass === 'col-6') {
			// Bordo Clima website
			var project = ['https://docs.google.com/document/d/e/2PACX-1vQZVjOhMcmHyJiiEn35qnDB6hX0r02Hbhja4W5uB7hfInV1JI7NDKu9LICBgEjE8KgXJ7mtLe5E1iMQ/pub?embedded=true'];
		} else if (frameClass === 'col-7') {			
			// Risograph
			var project = ['https://docs.google.com/document/d/e/2PACX-1vQOO7BkLmIx7PeyVS15ItlOd_ry3p1hTiA8vspfzbayA_w6BxWoask1XlTnkshZNz4MjJIfRZJlDayW/pub?embedded=true'];
		} else if (frameClass === 'col-8') {		
			// Something in the air
			var project = ['https://docs.google.com/document/d/e/2PACX-1vR7JLDyLylF2V7DtPBF8ZmronOrGpZJf-R2FkBdQwN24BttG3FtbjbVAF1wCl7KsWMBME9ijw5-0Yqd/pub?embedded=true'];
		} else if (frameClass === 'col-9') {
			// Polar Opacity
			var project = ['https://docs.google.com/document/d/e/2PACX-1vQaDLS_fsaJSlMxfTB-QCjXxB0NqImto8sahd1jzOwd152VKidZOLCPmP1DAHJH55D33Vcg4nrS3imo/pub?embedded=true'];
		} else if (frameClass === 'col-10') {
			// Fluid Geographies
			var project = ['https://docs.google.com/document/d/e/2PACX-1vT6H7gw025pAe7OcDJ_OjK9xnRfpO2Tu4RezxYksEgPJNb0JDzZvTs1R4LPP2LQQUCf3Zkcv2NubWSf/pub?embedded=true'];
		} else if (frameClass === 'col-11') {
			// Performative Calligraphies
			var project = ['https://docs.google.com/document/d/e/2PACX-1vSmicw7nNSKdZKv-BeuD1II5QvdwlVM3OH7teFD-L0mek3B3nzIq3W1fL9CPkpod9tTo_oYKTaHjSBF/pub?embedded=true'];
		} else if (frameClass === 'col-12') {
			// Scrolling Atmosphere
			var project = ['https://docs.google.com/document/d/e/2PACX-1vS3GEtp8Lb0pe8r6PAO8YQlo2yJs5ot51M3ev8gHNeuVJLytNblkAL8bBs8gsHthrqG7zR59VcYHblb/pub?embedded=true'];
		} else if (frameClass === 'col-13') {
			// Bluedot
			var project= ['https://docs.google.com/document/d/e/2PACX-1vSmaaLXQya8VKyv3C1JdW6rkqNWh1FCsJNAihrRo5VkHqzdekK_k2BtB0ffMxq45Oz70kNaZkZS9dF0/pub?embedded=true'];
		} else if (frameClass === 'col-14') {
			// Unseen
			var project = ['https://docs.google.com/document/d/e/2PACX-1vSmseaDZuC828geyXnES3hddqZgiTUDj8PLN5rhFoSJG2PIV962_oOPTSwtR4gOt8dUmqHzyuBJh2YW/pub?embedded=true'];
		} else if (frameClass === 'col-15') {
			// Eye
			var project = ['https://docs.google.com/document/d/e/2PACX-1vTAEFDLHfzJdquIhCTbl7IYxMgdfeuLF9_Z62w_0npVHF_EXOVRqGsMApb_YKGnFW17BO-jxy7G0OEG/pub?embedded=true'];
		} 
		
		$(this).attr('src', project);
	
	});

});







