// import { Appoint, Call, Chats, DashBoard, Department, Doctor, Patients, logoSVG } from "./svg/logo";

import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgModule } from "@angular/core";

@NgModule({
    // imports:[SvgIconsModule.forRoot({
    //     sizes: {
    //         xs: '5px',
    //         sm: '12px',
    //         md: '16px',
    //         lg: '20px',
    //         xl: '25px',
    //         xxl: '35px'
    //     },
    //     icons:[
    //         logoSVG,
    //         Appoint,
    //         DashBoard,
    //         Doctor,
    //         Department,
    //         Call,
    //         Chats,
    //         Patients

    //     ]
    // })],
    // declarations:[],
    // exports:[SvgIconsModule]
    
    imports:[AngularSvgIconModule.forRoot({

    })],
    declarations:[],
    exports:[AngularSvgIconModule]

})

export class IconModule{}