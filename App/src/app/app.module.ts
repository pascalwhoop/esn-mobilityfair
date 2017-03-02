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
import {ObjectToArrayPipe} from "../pipes/ObjectToArrayPipe";
import {CountryModalPage} from "../pages/country-modal/country-modal";
import {UniversityDetailPage} from "../pages/university-detail/university-detail";
import {NavImgCardComponent} from "../components/nav-img-card/nav-img-card";
import {PartnerDetailPage} from "../pages/partner-detail/partner-detail";

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
        PartnerDetailPage,
        UniversityDetailPage,
        PartnersPage,
        UniversitiesOverviewPage,
        WhyStudentsPage,
        DirectionsCardComponent,
        NavImgCardComponent,
        DesktopNavbarComponent,
        MobileNavbarComponent,
        CombinedNavbarComponent

    ],
    imports: [
        IonicModule.forRoot(MyApp, {},
            {
                links: [
                    {component: AboutPage, name: 'Home', segment: 'home'},
                    {component: UniversitiesOverviewPage, name: 'Universities', segment: 'universities', defaultHistory: [AboutPage]},
                    {component: UniversityDetailPage, name: "UniversityDetail", segment: "detail/:sectionId", defaultHistory: [AboutPage]},
                    {component: WhyStudentsPage, name: 'WhyStudents', segment: 'why-students', defaultHistory: [AboutPage]},
                    {component: WhyExhibitorsPage, name: "WhyExhibitors", segment: "why-exhibitors", defaultHistory: [AboutPage]},
                    {component: PartnersPage, name: "Partners", segment: "partners", defaultHistory: [AboutPage]},
                    {component: PartnerDetailPage, name: "PartnerDetail", segment: "detail/:partnerId", defaultHistory: [AboutPage]},

                ]
            })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ProgramPage,
        PartnerDetailPage,
        UniversityDetailPage,
        PartnersPage,
        UniversitiesOverviewPage,
        CountryModalPage,
        WhyExhibitorsPage,
        WhyStudentsPage,
        //components
        

    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, CustomLogoList, UiTextProvider]
})
export class AppModule {
}
