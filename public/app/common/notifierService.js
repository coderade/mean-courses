meanApp.value('toastrService', toastr);


meanApp.factory('notifierService', function (toastrService) {
    return{
        notify: function (msg) {
            toastrService.success(msg);
        },
        error: function (msg) {
            toastrService.error(msg);
        },
        warning: function (msg) {
            toastrService.warning(msg);
        },
        info: function (msg) {
            toastrService.info(msg);
        }
    }
});