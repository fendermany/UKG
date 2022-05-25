import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import { iconsPlay } from '../../../img/images';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ abc, options }) => {
	const container = useRef();
	const player = useRef();
	const [hideIcon, setHideIcon] = useState(null);

	const handleIcon = boolean => {
		setHideIcon(boolean);
	};

	useEffect(() => {
		player.current = videojs(container.current, options);
		player.current.on('play', () => {
			handleIcon(true);
		});
		return () => {
			player.current.dispose();
		};
	}, [abc]);

	return (
		<>
			<div data-vjs-player key={abc} className='video-js'>
				<video ref={container} />
			</div>
			{!hideIcon ? (
				<div className='preview-center'>
					<img className='preview-icon' src={iconsPlay} alt='play' />
					<span className='preview-text'>Смотреть</span>
				</div>
			) : null}
		</>
	);
};

export default VideoPlayer;
