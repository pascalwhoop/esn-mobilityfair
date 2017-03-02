import {Component, ChangeDetectorRef} from "@angular/core";
import {Platform} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {UiTextProvider} from "../providers/ui-text-provider";
import {AboutPage} from "../pages/about/about";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage = AboutPage;
    //rootPage = WhyStudentsPage;

    reloading = false;

    constructor(platform: Platform, texts: UiTextProvider, private cd: ChangeDetectorRef) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();

            //on texts change we reload the page
            this.hookIntoLangLoop(texts);
        });



    }

    private hookIntoLangLoop(texts: UiTextProvider) {
        texts.texts.subscribe(
            on => {
                this.reloading = true;
                this.cd.detectChanges();
                this.reloading = false;
                this.cd.detectChanges();
                this.cd.markForCheck();
            }
        )
    }
}
