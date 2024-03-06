import React from 'react';

export default function Form({title}) {
	return (
		<div className={`rounded-3xl  flex justify-center flex-col items-center w-full md:w-1/2 mx-auto py-10 px-1 sm:px-5 my-10`}>
			<h1 className='font-bold text-3xl mb-5'>{title}</h1>
			<form
				action=''
				className='flex justify-between flex-col items-center gap-6 w-4/5 sm:w-3/4'
			>
				<div className='flex flex-col justify-between items-start gap-2 w-full'>
					<label htmlFor='name' className='font-medium'>
						Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Enter your name'
						className='outline-gray-950 outline outline-2 rounded-md px-2 py-1 text-gray-800 font-medium w-full'
						required
					/>
				</div>

				<div className='flex flex-col justify-between items-start gap-2 w-full'>
					<label htmlFor='regno' className='font-medium'>
						Registration Number
					</label>
					<input
						required
						type='text'
						name='regno'
						id='regno'
						placeholder='RA2311003030000'
						className='outline-gray-950 outline outline-2 rounded-md px-2 py-1 text-gray-800 font-medium w-full'
					/>
				</div>

				<div className='flex flex-col justify-between items-start gap-2 w-full'>
					<label htmlFor='section' className='font-medium'>
						Section
					</label>
					<input
						required
						type='text'
						name='section'
						id='section'
						placeholder='C'
						className='outline-gray-950 outline outline-2 rounded-md px-2 py-1 text-gray-800 font-medium w-full'
					/>
				</div>

				<div className='flex flex-col justify-between items-center gap-2 w-full'>
					<p className='font-medium text-base self-start'>Year</p>

					<div className='flex justify-between items-center w-full'>
						<div className='flex items-center gap-1'>
							<input
								type='radio'
								name='year'
								id='1year'
								value={'Year1'}
							/>
							<label htmlFor='1year' className='text-sm'>
								1st Year
							</label>
						</div>

						<div className='flex items-center gap-1'>
							<input
								type='radio'
								name='year'
								id='2year'
								value={'Year2'}
							/>
							<label htmlFor='2year' className='text-sm'>
								2nd Year
							</label>
						</div>

						<div className='flex items-center gap-1'>
							<input
								type='radio'
								name='year'
								id='3year'
								value={'Year3'}
							/>
							<label htmlFor='3year' className='text-sm'>
								3rd Year
							</label>
						</div>
					</div>
				</div>

				<div className='flex flex-col justify-between items-start gap-2 w-full'>
					<label htmlFor='email' className='font-medium'>
						Email
					</label>
					<input
						required
						type='email'
						name='email'
						id='email'
						placeholder='ab000@srmist.edu.in'
						className='outline-gray-950 outline outline-2 rounded-md px-2 py-1 text-gray-800 font-medium w-full'
					/>
				</div>

				<div className='flex flex-col justify-between items-start gap-2 w-full'>
					<label htmlFor='branch' className='font-medium'>
						Branch
					</label>
					<input
						required
						type='text'
						name='branch'
						id='branch'
						placeholder='CSE Core'
						className='outline-gray-950 outline outline-2 rounded-md px-2 py-1 text-gray-800 font-medium w-full'
					/>
				</div>

				<div className='flex flex-col justify-between items-start gap-2 w-full'>
					<label htmlFor='tel' className='font-medium'>
						Whatsapp Number
					</label>
					<input
						required
						type='tel'
						name='tel'
						id='tel'
						placeholder='Enter your number'
						className='outline-gray-950 outline outline-2 rounded-md px-2 py-1 text-gray-800 font-medium w-full'
					/>
				</div>

				{/* <div className='flex flex-col justify-between items-center gap-2 w-full'>
					<label htmlFor='github' className='font-medium'>
						GitHub Account
					</label>
					<input
						required
						type='url'
						name='github'
						id='github'
						placeholder='https://github.com/xxxx'
						className='outline-gray-950 outline outline-2 rounded-md px-2 py-1 text-gray-800 font-medium w-4/5'
					/>
				</div>

				<div className='flex flex-col justify-between items-center gap-2 w-full'>
					<label htmlFor='linkedin' className='font-medium'>
						Linkedin Account
					</label>
					<input
						required
						type='url'
						name='linkedin'
						id='linkedin'
						placeholder='https://www.linkedin.com/in/xxxxx'
						className='outline-gray-950 outline outline-2 rounded-md px-2 py-1 text-gray-800 font-medium w-4/5'
					/>
				</div> */}

				<div className=' text-black flex justify-between items-center gap-4 '>
					<button
						type='button'
						className='bg-white px-3 py-2 outline outline-2 outline-black rounded-xl '
					>
						Cancel
					</button>
					<button
						type='submit'
						className='bg-white px-3 py-2 outline outline-2 outline-black rounded-xl'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
