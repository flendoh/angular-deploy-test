import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarRow, MatToolbar, MatAnchor, RouterLinkActive, RouterLink, LanguageSwitcherComponent, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning-Center';

options= [
  {link:'/home',label:'home'},
  {link:'/about',label:'about'},
  {link:'/learning/courses',label:'courses'},
]




}
