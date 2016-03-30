meanApp.value('toastrService', toastr);


meanApp.factory('notifierService', function (toastrService) {
    return{
        notify: function (msg) {
            toastrService.success(msg);
            console.log(msg)
        },
        error: function (msg) {
            toastrService.error(msg);
            console.log(msg)
        },
        warning: function (msg) {
            toastrService.warning(msg);
            console.log(msg)
        },
        info: function (msg) {
            toastrService.info(msg);
            console.log(msg)
        }
    }
})