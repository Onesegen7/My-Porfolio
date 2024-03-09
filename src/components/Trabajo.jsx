function Trabajo({ list, title, anex, text }) {
  return (
    <>
      <div>
        <h1>
          {title}
          <span>{anex}</span>
        </h1>

        {text && <p>{text}</p>}

        {list && (
          <ul>
            {list.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Trabajo;
