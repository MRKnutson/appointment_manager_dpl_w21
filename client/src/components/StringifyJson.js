const StringifyJson = ({json}) => {
  return (
    <div>
      <code>
        {JSON.stringify(json)}
      </code>
    </div>
  );
};

export default StringifyJson;