import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Setting } from './settings.interface';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    settings: Setting[] = [
        { field: 'brightness', title: 'רמת בהירות', min: 0, max: 100, value: 100, default: 100 },
        { field: 'spacing', title: 'ריווח בין תווים', min: 0, max: 15, value: 0 },
        { field: 'fontSize', title: 'גודל גופן', min: 10, max: 50, value: 0 },
        { field: 'margin', title: 'ריווח פנימי של האתר', min: 1, max: 10, value: 0 },
        { field: 'invert', title: 'היפוך צבעים', min: 0, max: 100, value: 0 },
    ];

    change(item: Setting) {
        localStorage[item.field] = item.value;
        
        this.utility.setStyling();
    }
    
    reset() {
        this.settings.forEach(s => {
            s.value = s.default || 0;
            localStorage[s.field] = s.default || 0;
        });

        this.utility.setStyling();
    }

    constructor(private utility: UtilityService) {
        
    }

    ngOnInit() {
        this.settings.forEach(s => {
            if (localStorage[s.field]) {
                s.value = +localStorage[s.field];
            }
        });
    }

}
