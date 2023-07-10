// Enums

const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

console.log("statuses.done = ", statuses.done);

//-----------------------------------

enum StatusesEnum {
  NOT_STARTED = "Not started",
  IN_PROGRESS = "In Progress",
  DONE = "DOne",
}

console.log("StatusesEnum.IN_PROGRESS = ", StatusesEnum.IN_PROGRESS);
let loadingStatus = StatusesEnum.DONE;

let statusInfo: StatusesEnum = StatusesEnum.NOT_STARTED;
console.log("statusInfo = ", statusInfo);

// on progress :
statusInfo = StatusesEnum.IN_PROGRESS;
console.log("statusInfo = ", statusInfo);

// after completed
statusInfo = StatusesEnum.DONE;
console.log("statusInfo = ", statusInfo);

//--------------------------------------

interface TaskInterFace {
  id: string;
  status: StatusesEnum;
}

// initially
let tasks_1: TaskInterFace = {
  id: "1234",
  status: StatusesEnum.NOT_STARTED,
};

// on progress
tasks_1.status = StatusesEnum.IN_PROGRESS;

// upon completed
tasks_1.status = StatusesEnum.DONE;
