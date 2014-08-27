var helper = window.helper || {};

helper.ProgressController = function () {
    /////////////////////Private functions//////////////////////////////////
    var checkProgressForWarning = function (progressId, btnValue) {
            var progressbar = $("#" + progressId);
            var progressbarValue = progressbar.find(".ui-progressbar-value");
        if (parseInt(btnValue) > 100) {
            progressbarValue.css({ "background": "red" });
        }
        else {
            progressbarValue.css({"background": "#44FF44"});
        }
    }
    ///////////Public functions/////////////////////////////////////////
    return {
        updateProgress: function (progressId, btnValue) {

            var progressCurrentVal = $("#" + progressId).progressbar("value");

            var progressNewVal = progressCurrentVal + btnValue;

            $("#" + progressId).progressbar("value", parseInt(progressNewVal));

            $("#" + progressId + ">.progress-label").text(progressNewVal + "%");

            checkProgressForWarning(progressId, progressNewVal);
        }
        ////////////////////////////////////////////////////////////////////
    }
}
