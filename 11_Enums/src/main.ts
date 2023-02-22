// Enums

const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

console.log(statuses.done);

enum StatusesEnum {
  NOT_STARTED = "Not started",
  IN_PROGRESS = "In Progress",
  DONE = "DOne",
}

console.log(StatusesEnum.IN_PROGRESS);
let loadingStatus = StatusesEnum.DONE;

interface TaskInterFace {
  id: string;
  status: StatusesEnum;
}
