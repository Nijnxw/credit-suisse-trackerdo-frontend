function createData(id, title, status, due_date, description) {
  return { id, title, status, due_date, description };
}

export const tasks = [
  createData('1', 'Task 1', 70, "2021-05-14", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('2', 'Task 2', 30, "2021-05-16", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('3', 'Task 3', 30, "2021-05-19", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('4', 'Task 4', 30, "2021-05-23", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('5', 'Task 5', 30, "2021-05-26", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('6', 'Task 6', 30, "2021-05-30", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('7', 'Task 7', 30, "2021-06-04", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
];
