import { useState, useEffect } from 'react';

const Formulario = ({ pacientes, setPacientes }) => {
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [alta, setAlta] = useState('');
	const [sintomas, setSintomas] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validación del form
		if ([nombre, propietario, email, alta, sintomas].includes('')) {
			console.log('Hay al menos un campo vacío.');
			setError(true);
			return;
		} 
		
		setError(false);

		// Objeto Paciente
		const objetoPaciente = {
			nombre, 
			propietario, 
			email, 
			alta, 
			sintomas
		}

		setNombre('');
		setPropietario('');
		setEmail('');
		setAlta('');
		setSintomas('');

		// console.log(objetoPaciente);

		setPacientes([...pacientes, objetoPaciente]);
	}
	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

			<p className="text-lg mt-5 text-center mb-10">
				Agrega pacientes y &nbsp;
				<span className="text-indigo-600 font-bold text-lg">Administralos</span>
			</p>

			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
				{ error && 
					<div className="bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
						<p>Todos los campos son obligatorios</p>
					</div>
				}
				<div className="mb-5">
					<label htmlFor="mascota" className="block text-grey-700 uppercase font-bold">Nombre de la Mascota</label>
					<input 
						id="mascota" 
						type="text" 
						value={nombre} 
						onChange={ (e) => setNombre(e.target.value) } 
						placeholder="Nombre de la mascota" 
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="propietario" className="block text-grey-700 uppercase font-bold">Nombre del Propietario</label>
					<input 
						id="propietario" 
						type="text" 
						value={propietario} 
						onChange={ (e) => setPropietario(e.target.value) }
						placeholder="Nombre del propietario" 
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="email" className="block text-grey-700 uppercase font-bold">Email</label>
					<input 
						id="email" 
						type="email" 
						value={email}
						onChange={ (e) => setEmail(e.target.value) }
						placeholder="Email contacto propietario" 
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="alta" className="block text-grey-700 uppercase font-bold">Fecha alta</label>
					<input 
						id="alta" 
						type="date" 
						value={alta} 
						onChange={ (e) => setAlta(e.target.value) }
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">Síntomas</label>
					<textarea
						id="sintomas"
						value={sintomas} 
						onChange={ (e) => setSintomas(e.target.value) }
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describe los síntomas"
					/>
				</div>

				<input
					type="submit"
					className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
					value="Agregar Paciente"
				/>
			</form>
		</div>
	);
}

export default Formulario;
