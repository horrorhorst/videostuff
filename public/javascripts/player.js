/**
 * Created by horrorhorst on 4/21/15.
 */
(function (window, document) {

    var video = document.getElementsByTagName('video')[0],
        controls = document.getElementById("video_controls"),
        play = document.getElementById("play_pause"),
        progress_container = document.getElementById("progress"),
        progress_box = document.getElementById("progress_box"),
        play_progress = document.getElementById("play_progress"),
        fullscreen_btn = document.getElementById("video_fulls");
    var player={
        init:function (){
        var that = this;
        document.documentElement.className = "js";
        video.addEventListener('loadedmetadata', this.initializeControls, false);
        this.handleButtons();
        },
        initializeControls : function(){
            player.showHideControls();
        },
        showHideControls : function() {
            // Shows and hides the video player.
            video.addEventListener('mouseover', function() {
                videoControls.style.opacity = 1;
            }, false);

            controls.addEventListener('mouseover', function() {
                videoControls.style.opacity = 1;
            }, false);

            video.addEventListener('mouseout', function() {
                videoControls.style.opacity = 0;
            }, false);

            controls.addEventListener('mouseout', function() {
                videoControls.style.opacity = 0;
            }, false);
        },
        handleButtons : function() {
            play.addEventListener('click', this.playPause, false); //PLAYPAUSE TODO
            video.addEventListener('click', this.playPause, false);

        }
    };

    player.init();


})(this, document)