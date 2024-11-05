import { clsx } from 'clsx';
import { Form } from 'react-router-dom';
import type { TodoItem } from '../api/todos.ts';
import styles from './ListItem.module.css';

type Props = {
  item: TodoItem;
};

export function ListItem({ item }: Props) {
  return (
    <li>
      <Form method="post">
        <input type="hidden" name="id" value={item.id} />
        <button type="button" name="intent" value="done" className={clsx(styles.item, item.done && styles.done)}>
          {item.text}
        </button>
        <button type="submit" name="intent" value="remove">
          x
        </button>
      </Form>
    </li>
  );
}
