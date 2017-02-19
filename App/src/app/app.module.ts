import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {AboutPage} from "../pages/about/about";
import {ProgramPage} from "../pages/program/program";
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
import {DesktopNavbarComponent} from "../components/desktop-navbar/desktop-navbar";
import {CombinedNavbarComponent} from "../components/combined-navbar/combined-navbar";
import {MobileNavbarComponent} from "../components/mobile-navbar/mobile-navbar";
import {EsnSectionsPage} from "../pages/esn-sections/esn-sections";
import {ExhibitorsPage} from "../pages/exhibitors/exhibitors";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ProgramPage,
        EsnSectionsPage,
        ExhibitorsPage,
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
        DesktopNavbarComponent,
        MobileNavbarComponent,
        CombinedNavbarComponent

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
        EsnSectionsPage,
        ExhibitorsPage,
        //components
        ExhibitorCardComponent,
        LanguageSwitchButtonComponent,
        ExhibitorModalPage,
        WhyExhibitorsPage,
        WhyStudentsPage,
        DirectionsCardComponent,
        DesktopNavbarComponent,
        MobileNavbarComponent,
        CombinedNavbarComponent

    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, CustomLogoList, UiTextProvider]
})
export class AppModule {
}
