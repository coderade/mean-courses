meanApp.value('toastrSvc', toastr);


meanApp.factory('notifierSvc', function (toastrSvc) {
    return{
        notify: function (msg) {
            toastrSvc.success(msg);
            console.log(msg)
        },
        error: function (msg) {
            toastrSvc.error(msg);
            console.log(msg)
        }
    }
})