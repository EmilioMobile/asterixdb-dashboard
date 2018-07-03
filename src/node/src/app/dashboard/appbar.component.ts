/*
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as appActions from '../shared/actions/app.actions'
import * as dataverseActions from '../shared/actions/dataverse.actions';

@Component({
    moduleId: module.id,
    selector: 'awc-bar',
    templateUrl: 'appbar.component.html',
    styleUrls: ['appbar.component.scss']
})

export class AppBarComponent {
    sideMenuVisible$: Observable<any>;
    sideMenuVisible: boolean;

    constructor(private store: Store<any>) {
        this.sideMenuVisible$ = this.store.select(s => s.app.sideMenuVisible);
		    this.sideMenuVisible$.subscribe((data: any) => {
          if (data){
                  this.sideMenuVisible = data;
          } else {
          }
        })
        this.store.dispatch(new dataverseActions.SelectDataverses('-'));
    }

    onClickMenu() {
        this.sideMenuVisible = !this.sideMenuVisible;
        this.store.dispatch(new appActions.setSideMenuVisible(this.sideMenuVisible));
    }
}