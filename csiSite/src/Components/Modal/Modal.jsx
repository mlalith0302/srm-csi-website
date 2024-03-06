import React from 'react';

export default function Modal(props) {
	return (
		<>
			<div
				className='fixed top-0 left-0 w-full h-full bg-black opacity-25 z-10'
				onClick={props.handleModalClose}
			></div>
			<dialog className='flex items-center justify-center z-20 p-0 border-none overflow-hidden bg-transparent w-11/12 sm:w-9/12 md:w-6/12'>
				{props.children}
			</dialog>
		</>
	);
}
