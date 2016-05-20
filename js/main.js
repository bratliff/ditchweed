var musicWindow;

var songs = [
	'songs/Ditchweed_All_Night.m4a',
	'songs/Ditchweed_Magic_Sam.m4a',
	'songs/Ditchweed_Black_Hearts.m4a',
	'songs/Ditchweed_Into_The_Valley.m4a',
	'songs/Ditchweed_My_Days.m4a',
	'songs/Ditchweed_TheBell.m4a',
	'songs/Ditchweed_Redemption.m4a',
	'songs/Ditchweed_Bucket_Of_Love.m4a',
	'songs/Ditchweed_King_Size_Bed.m4a'
]

var bg_opacity;
var scrolled;

var scrollMonitor = function() {
	scrolled = $(window).scrollTop();
	bg_opacity = scrolled * .001;
	$('.bg-changer').css({'opacity':bg_opacity});
	if(scrolled > 300) {

	}
}

var playSong = function(index){

	currentPlay = new Howl({
	  urls: [songs[index]]
	}).play();
	console.log(sound);
}

$(document).ready(function(){

	$('.flex-container').on('click','li',function(e){
		if($(window).width() > 700) {
			musicWindow = window.open(songs[$(this).index()], "_musicwindow", "width=300, height=100");
		} else {
			musicWindow = window.open(songs[$(this).index()], "_self");
		}
	});

	$(window).bind('scroll',function(e){
	    scrollMonitor();
	 });

});
