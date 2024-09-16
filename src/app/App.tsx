import '../scss/styles.scss';

const listItems = ['first el', 'first el', 'first el']
// const listItems = ['first el', 'first el', 'first el', 'first el', 'first el', 'first el']
// const listItems = ['1', '2']


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
							// style={{transform: `rotate(${rotateAngle - startPos}deg) translate(0, 215px ) rotate(${-rotateAngle + startPos}deg)`}}
							style={{transform: `rotate(${rotateAngle - startPos}deg) translate(0, calc( (var(--circle-size) - (var(--circle-item-size) / 10) ) / 2)) rotate(${-rotateAngle + startPos}deg)`}}
						>
							<span>{el}</span>
						</li>
					)
				})}
			</ul>
		</div>
	);
}


