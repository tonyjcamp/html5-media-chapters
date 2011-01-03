(function($) {

	$.fn.mediaChapter = function(options) {

		// create object to store variables
		var mediaChapters = {
			audioElement: $('.audio'), // Default audio player that will load the audio file
			audioChapter:  $('.loader'), // Default element that will have the data-timestamp for the chapter
			audioDirectory: 'mp3' // Directory where audio files live
		};

		if(options) {
			$.extend(mediaChapters, options);
		}

		// Click on the specified element to load .mp3 into audio tag
		$(this).live('click', function() {
			var episode = $(this).data('filename');

			// Load the audio file for the selected episode
			$.ajax({
				success: function() {
					mediaChapters.audioElement.attr({
						src: mediaChapters.audioDirectory + '/' + episode + '.mp3'
					});
				}
			});

			return false;
		});

		// Click on Segment, Set timestamp in audioplayer - autoplay
		mediaChapters.audioChapter.live('click', function() {
			var timestamp = $(this).data('timestamp').split(':'),
				minutes = parseInt(timestamp[0] * 60),
				seconds = parseInt(timestamp[1]);

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
