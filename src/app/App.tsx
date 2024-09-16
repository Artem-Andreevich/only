import '../scss/styles.scss';


const listItems = ['first el', 'first el', 'first el', 'first el', 'first el', 'first el']


export const App = () => {
	return (
		<div className="app">
			<ul className='circle'>
				{listItems.map( (el, i) => {
					const startPos = 150
					const offsetAngle = 360 / listItems.length;
					const rotateAngle = offsetAngle * i;
					return (
						<li 
							className='list-item' 
							style={{transform: `rotate(${rotateAngle - startPos}deg) translate(0, calc(var(--circle-size) / 2)) rotate(${-rotateAngle + startPos}deg)`}}
						>
							{el}
						</li>
					)
				})}
			</ul>
		</div>
	);
}


