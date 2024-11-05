import { useEffect, useState } from 'react';
import { type ActionFunctionArgs, Form, useLoaderData } from 'react-router-dom';
import { todos } from '../api/todos.ts';
import { ListItem } from '../components/ListItem.tsx';

export const loader = () => todos.list();

export const action = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const intent = data.get('intent');

  switch (intent) {
    case 'add':
      await todos.add(String(data.get('text')));
      break;
    case 'remove':
      await todos.remove(String(data.get('id')));
      break;
    case 'done':
      await todos.toggleDone(String(data.get('id')));
      break;
  }

  return {};
};

export function Index() {
  const items = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();

    setIcon(() => (hour > 6 && hour < 20 ? '☀️' : '🌑'));
  });

  return (
    <>
      <h2>List {icon}</h2>
      <Form method="post">
        <input type="text" name="text" required={true} />
        <button type="submit" name="intent" value="add">
          Add item
        </button>
      </Form>
      <ol>
        {items.map((item) => (
          <ListItem item={item} />
        ))}
      </ol>
    </>
  );
}
