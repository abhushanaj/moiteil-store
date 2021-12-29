import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
	const [counter, setCounter] = useState<number>(0);
	return (
		<div>
			<h1>Hello World {counter}</h1>
			<button type="button" title="Click button" onClick={() => setCounter((prev) => prev + 1)}>
				Hello World
			</button>
		</div>
	);
};

export default Home;
