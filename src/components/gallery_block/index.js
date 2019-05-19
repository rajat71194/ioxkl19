/**
 * Copyright 2016 Oleh Zasadnyy, GDG Lviv
 * Source: https://github.com/gdg-x/hoverboard
*/

import { Component } from 'preact';
import style from './style';

export default class GalleryBlock extends Component {
	render() {
		return (
			<div class={style.photos_grid}>
				<img crossorigin="anonymous" class={style.grid_item} src="https://res.cloudinary.com/limhenry/image/upload/v1537072861/devfestkl18_pwa/gallery/1.jpg" />
				<img crossorigin="anonymous" class={style.grid_item} src="https://res.cloudinary.com/limhenry/image/upload/v1537072831/devfestkl18_pwa/gallery/2.jpg" />
				<img crossorigin="anonymous" class={style.grid_item} src="https://res.cloudinary.com/limhenry/image/upload/v1537072843/devfestkl18_pwa/gallery/3.jpg" />
				<img crossorigin="anonymous" class={style.grid_item} src="https://res.cloudinary.com/limhenry/image/upload/v1537072857/devfestkl18_pwa/gallery/4.jpg" />
				<img crossorigin="anonymous" class={style.grid_item} src="https://res.cloudinary.com/limhenry/image/upload/v1537072841/devfestkl18_pwa/gallery/5.jpg" />
				<img crossorigin="anonymous" class={style.grid_item} src="https://res.cloudinary.com/limhenry/image/upload/v1537072846/devfestkl18_pwa/gallery/6.jpg" />
				<img crossorigin="anonymous" class={style.grid_item} src="https://res.cloudinary.com/limhenry/image/upload/v1537072883/devfestkl18_pwa/gallery/7.jpg" />
				<img crossorigin="anonymous" class={style.grid_item} src="https://res.cloudinary.com/limhenry/image/upload/v1537072866/devfestkl18_pwa/gallery/8.jpg" />
				<div crossorigin="anonymous" class={style.gallery_info}>
					<div>
						<h2>IWD 2019 highlights</h2>
						<p>This year's festival built lots of excitement. Check out photos from featured talks, hands-on learning sessions, and after-hours fun.</p>
					</div>
					<a href="https://photos.google.com/share/AF1QipOkw9GPf2HV9ue7cMiiALYtia1_-of0SeFxeut-YrmjVtNOL420uC56SZry1xmlag?key=X2F6QUJTUm9pcWZZS3g3Mnk5YVgtSWhSVFR4QU9R" target="_blank" rel="noopener noreferrer">See all photos</a>
				</div>
			</div>
		);
	}
}