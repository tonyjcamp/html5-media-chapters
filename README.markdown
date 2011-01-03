# HTML5 Media Chapters [http://tonycamp.com/html5-media-chapters/](http://tonycamp.com/html5-media-chapters/)
(Currently only working in Chrome browser)

## Summary:

The beginnings of a jQuery plugin that will allow you to time stamp an element, attach an event handler to it which will load an audio file, and jump to the specified time stamp.

I chose to use the yayQuery podcasts as a demo because they taught me so much. Learn, and share. Thanks Rebecca Murphey, Adam Sontag, Alex Slexton, Paul Irish. Follow these people on github and twitter. You will learn a ton.

## How To Use

Give the element that will handle the click event a data-filname attribute which will serve as the filename to load into the audio player. For example:

&lt;span class="episode_title" data-filename="yayquery_0"&gt;Episode 0&lt;/span&gt;

Now that you have your click handler and file to load, you need to add a chapter to the audio file. For that you need to add a data-timestamp attribute to the click handler for the chapter. For example:

&lt;a href="#" class="loader" data-timestamp="2:45"&gt;_js Library&lt;/a&gt;

This example would jump the yayquery_0.mp3 file to the 2 minute 45 second mark and start playing from there. (note .mp3 is the default file type)

Next you need to call the new plugin on the click handler. It can be basic like so (uses default values for file type, directory and element classes):

$('.episode_title').mediaChapter();

By default, the plugin will look for HTML5 audio players with a class of "audio", this can be overwritten by specifying a class of your choice like so:

$('.episode_title').mediaChapter({
	audioElement: $('.myaudio') // this is your audio class, name it whatever you like
});

Here are some more customizable variables you can use to suit your needs:

audioElement: $('.audio'), // Audio player that will load the audio file
audioChapter:  $('.loader'), // Element that will have the data-timestamp for the chapter
audioDirectory: 'mp3' // Directory where audio files live

## Changelog:

### v.1.0 : January 3rd, 2011

#### General
* Very first commit. Still rough, but eff it.