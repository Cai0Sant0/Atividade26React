const MudaEstilo = (props) => {

  let estiloPrimeiroParagrafo = {
    margin: "30px",
    fontSize: "25px",
    fontFamily: "fantasy",
    backgroundColor: "aqua",
    color: "white"
  };

  let estiloSegundoParagrafo = {
    margin:" 30px",
    fontSize: "35px",
    fontFamily: "system-ui",
    fontWeight: 100,
    backgroundColor:" #18f910c7",
    color: '#ff0000'
  };


  return props.isHighlighted ? (
    <p style={estiloPrimeiroParagrafo}>Texto se a prop for verdadeira</p>
  ) : (
    <p style={estiloSegundoParagrafo}>Texto se a prop não for verdadeira</p>
  );
};

export default MudaEstilo;
