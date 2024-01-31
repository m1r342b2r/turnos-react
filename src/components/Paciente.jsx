const Paciente = () => {
  return (
	<div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Nombre: &nbsp;
				<span className="font-normal normal-case">Hook</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Propietario: &nbsp;
				<span className="font-normal normal-case">Mario Canario</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Email: &nbsp;
				<span className="font-normal normal-case">yo@yo.com</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Fecha Alta: &nbsp;
				<span className="font-normal normal-case">No mucho</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Síntomas: &nbsp;
				<span className="font-normal normal-case">Se caga encima</span>
			</p>
		</div>
  );
}

export default Paciente;
