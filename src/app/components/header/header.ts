import { Component } from '@angular/core';
import {RouterLink} from '@angular/router'
import {CircleQuestionMark, Heart, House, LucideAngularModule, Moon, Sun} from 'lucide-angular'

@Component({
  selector: 'app-header',
	imports: [
		RouterLink,
		LucideAngularModule
	],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
	
	protected readonly House = House
	protected readonly Heart = Heart
	protected readonly Moon = Moon
	protected readonly Sun = Sun
	protected readonly CircleQuestionMark = CircleQuestionMark
}
