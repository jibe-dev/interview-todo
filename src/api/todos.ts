const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type TodoItem = {
  id: string;
  text: string;
  done: boolean;
  trashed: boolean;
};

let items: TodoItem[] = [];
const update = async (id: string, fn: (item: TodoItem) => void) => {
  await wait(100);

  let success = false;
  items = items.map((item) => {
    if (item.id === id) {
      fn(item);
      success = true;
    }

    return item;
  });

  return success;
};

export const todos = {
  list: async (trashed = false) => {
    await wait(100);

    return items.filter((item) => item.trashed === trashed);
  },
  add: async (text: string) => {
    const item: TodoItem = {
      id: crypto.randomUUID(),
      text,
      done: false,
      trashed: false
    };

    items = [...items, item];
    await wait(100);

    return item;
  },
  remove: async (id: string) => {
    await wait(100);

    items = items.filter((item) => item.id !== id);
  },
  toggleDone: (id: string) =>
    update(id, (item) => {
      item.done = !item.done;
    }),
  toggleTrashed: (id: string) =>
    update(id, (item) => {
      item.trashed = !item.trashed;
    })
};
