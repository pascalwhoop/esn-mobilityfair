import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {AboutPage} from "../pages/about/about";
import {ProgramPage} from "../pages/program/program";
import {CustomLogoList} from "../providers/custom-logo-list";
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
import {PartnersPage} from "../pages/partners-page/partners-page";
import {UniversitiesOverviewPage} from "../pages/universities-overview/universities-overview";
import {PartnersOverviewPage} from "../pages/partners-overview/partners-overview";
import {ObjectToArrayPipe} from "../pipes/ObjectToArrayPipe";
import {CountryModalPage} from "../pages/country-modal/country-modal";
import {UniversityDetailPage} from "../pages/university-detail/university-detail";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ProgramPage,
        //components
        LanguageSwitchButtonComponent,
        //pipes
        LangExpandPipe,
        ObjectToArrayPipe,
        TranslatePipe,
        WhyExhibitorsPage,
        CountryModalPage,
        PartnersOverviewPage,
        UniversityDetailPage,
        PartnersPage,
        UniversitiesOverviewPage,
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
        PartnersOverviewPage,
        UniversityDetailPage,
        PartnersPage,
        UniversitiesOverviewPage,
        CountryModalPage,
        //components
        LanguageSwitchButtonComponent,
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
