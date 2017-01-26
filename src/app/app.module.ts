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
    //pipes?
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    ExhibitorModalPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, CustomLogoList]
})
export class AppModule {
}
