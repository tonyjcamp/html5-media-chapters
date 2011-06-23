(function($) {

	$.fn.mediaChapter = function(options) {

		// create object to store variables
		var mediaChapters = {
				audioElement: $('.audio'), // Default audio player that will load the audio file
				audioChapter:  $('.loader'), // Default element that will have the data-timestamp for the chapter
				audioDirectory: 'mp3'// Directory where audio files live
			},
			bool = !!mediaChapters.audioElement.canPlayType,
			_this = $(this),
			extension;
		
		// Modernizr's audio file compatibility check
		// http://www.modernizr.com/
		if (bool){  
			bool      = new Boolean(bool);  
			bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"');
			bool.mp3  = elem.canPlayType('audio/mpeg;');
		}

		// set audio extension based on file type the browser can play
		if(bool.mp3) {
			extension = '.mp3';
		} else {
			extension = '.ogg';
		}

		if(options) {
			$.extend(mediaChapters, options);
		}

		// Click on the specified element to load .mp3 into audio tag
		_this.live('click', function() {
			var episode = $(this).data('filename');

			// Load the audio file for the selected episode
			$.ajax({
				success: function() {
					mediaChapters.audioElement.attr({
						src: mediaChapters.audioDirectory + '/' + episode + extension
					});
				}
			});

			return false;
		});

		// Click on Segment, Set timestamp in audioplayer - autoplay
		mediaChapters.audioChapter.live('click', function() {
			var timestamp = $(this).data('timestamp').split(':'),
				minutes = parseInt(timestamp[0] * 60, 10),
				seconds = parseInt(timestamp[1], 10);

			// Give the audio player the timestamp of the segment
			mediaChapters.audioElement.attr({
				currentTime: minutes + seconds
			});

			// Start playing the segment once the audio file is loaded
			mediaChapters.audioElement[0].play();

			return false;
		});

		// return the 'this' keyword to maintain chainability
		return this;

	};

})(jQuery);
