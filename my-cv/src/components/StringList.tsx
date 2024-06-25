interface Props {
  items: string[];
}

function StringList({ items }: Props) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default StringList;
