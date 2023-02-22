"use strict";
// Enums
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.done);
var StatusesEnum;
(function (StatusesEnum) {
    StatusesEnum["NOT_STARTED"] = "Not started";
    StatusesEnum["IN_PROGRESS"] = "In Progress";
    StatusesEnum["DONE"] = "DOne";
})(StatusesEnum || (StatusesEnum = {}));
console.log(StatusesEnum.IN_PROGRESS);
var loadingStatus = StatusesEnum.DONE;
