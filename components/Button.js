function Button({ text }) {
  return (
    <div>
      <button className="px-4 py-2 text-white bg-primary font-semibold rounded-lg border-2 border-primary-hover">
        {text}
      </button>
    </div>
  );
}

export default Button;
