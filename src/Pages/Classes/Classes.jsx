import { useEffect, useState } from "react";

const Classes = () => {
	const [classes, setClasses] = useState([]);
	useEffect(() => {
		fetch("https://craftopia-server-side.vercel.app/classes")
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);
	return (
		<div className='bg-slate-200'>
			<h1 className='bg-slate-700 text-center text-3xl font-semibold font-serif  p-5 text-white tracking-wider'>
				Classes
			</h1>
			<div className='grid grid-cols-3 justify-center items-center gap-10 md:p-16'>
				{classes.map((classs) => (
					<div key={classs._id} className='bg-slate-300 relative rounded-3xl hover:text-white'>
						<div className=' h-60  flex-col items-center justify-center'>
							<img className=' rounded-3xl shadow-lg' src={classs.image} />
							<div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-0 rounded-3xl z-20 hover:bg-opacity-60 opacity-100 transition-opacity'></div>
                            </div>
							<div className="relative hover:bg-black hover:bg-opacity-60 z-50">
                            <h2 className=" text-2xl font-semibold">{classs.name}</h2>
                        <p className=" text-lg font-semibold">{classs.instructor}</p>
                            </div>
						
					</div>
				))}
			</div>
		</div>
	);
};

export default Classes;
