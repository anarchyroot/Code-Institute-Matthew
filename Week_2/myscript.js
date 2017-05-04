/**
 * Created by matthewaltomare on 28/04/2017.
 */
$(document).ready(function() {

        $("h2").mouseenter(function() {
            $("h2").addClass("redText");
        });
            $("h2").mouseleave(function() {
                $("h2").removeClass("redText");
            });

        $("ul").addClass("invisible");

});