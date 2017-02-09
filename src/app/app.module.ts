import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {AboutPage} from "../pages/about/about";
import {TabsPage} from "../pages/tabs/tabs";
import {ProgramPage} from "../pages/program/program";
import {ExhibitorsPage} from "../pages/exhibitors/exhibitors";
import {ExhibitorCardComponent} from "../components/exhibitor-card/exhibitor-card";
import {CustomLogoList} from "../providers/custom-logo-list";
import {ExhibitorModalPage} from "../pages/exhibitor-modal/exhibitor-modal";
import {UiTextProvider} from "../providers/ui-text-provider";
import {LangExpandPipe} from "../pipes/lang-expand-pipe";
import {TranslatePipe} from "../pipes/translate-pipe";
import {LanguageSwitchButtonComponent} from "../components/language-switch-button/language-switch-button";
import {WhyExhibitorsPage} from "../pages/why-exhibitors/why-exhibitors";
import {WhyStudentsPage} from "../pages/why-students/why-students";
import {DirectionsCardComponent} from "../components/directions-card/directions-card";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ProgramPage,
        ExhibitorsPage,
        TabsPage,
        //components
        ExhibitorCardComponent,
        ExhibitorModalPage,
        LanguageSwitchButtonComponent,
        //pipes
        LangExpandPipe,
        TranslatePipe,
        WhyExhibitorsPage,
        WhyStudentsPage,
        DirectionsCardComponent,

    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            platforms: {
                android: {
                    tabsPlacement: 'top'
                }
            },
            pageTransition: 'md-transition'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ProgramPage,
        ExhibitorsPage,
        TabsPage,
        //components
        ExhibitorCardComponent,
        LanguageSwitchButtonComponent,
        ExhibitorModalPage,
        WhyExhibitorsPage,
        WhyStudentsPage,
        DirectionsCardComponent,

    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, CustomLogoList, UiTextProvider]
})
export class AppModule {
}
