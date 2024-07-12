import "./Button.scss";
function Button({ title }: { title: string }) {
  return (
    <>
      <h2 className="button">{title}</h2>
    </>
  );
}

export default Button;
