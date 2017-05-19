import {Component} from "@angular/core";
import {AlertController, NavController, NavParams, Platform} from "ionic-angular";

/*
 Generated class for the Speakers page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-speakers',
    templateUrl: 'speakers.html'
})
export class SpeakersPage {

    speakers: ISpeeches[];

    constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, public alert: AlertController) {
        this.speakers = [
            {
                name: 'Günter Schmidt - IBM',
                topic: 'Digital transformation - wie big data und cognitive computing die Welt verändert',
                logoUrl: 'assets/img/IBM.png',
                time: '11.00-12.00',
                room: 'Lynen Zimmer, Harnack-Haus'
            },
            {
                name: 'Gostralia',
                topic: 'Auslandssemester in Australien, Neusseland und Asien - Infos zu Organisation, Finanzierung, Land & Leuten',
                logoUrl: 'assets/img/gostralia_logo.png',
                time: '11.30-12.30',
                room: 'Mozart Zimmer, Harnack-Haus'

            },
            {
                name: 'EU Career Ambassadors',
                topic: 'Traineeships bei EU Institutionen',
                logoUrl: 'assets/img/EU.jpg',
                time: '12.00-12.30',
                room: 'Lynen Zimmer, Harnack-Haus'
            },
            {
                name: 'Mov\'in Europe',
                topic: 'Study, work, and travel abroad—overview of the European mobility programmes',
                logoUrl: 'assets/img/MovinEurope.png',
                time: '12.30-13.00',
                room: 'Mozart Zimmer, Harnack-Haus'
            },
            {
                name: 'Deutsche Börse',
                topic: 'Datafication',
                logoUrl: 'assets/img/deutscheboerse.svg',
                time: '12.50-13.30',
                room: 'Max-Kade-Auditorium, Henry-Ford-Bau'
            },
            {
                name: 'Stefan Jahnke',
                topic: 'Leben und arbeiten im Ausland - Ein Erfahrungsbericht',
                time: '13.00-13.30',
                room: 'Mozart Zimmer, Harnack-Haus'
            },
            {
                name: 'Akademie Auswärtiger Dienst',
                topic: 'Arbeiten im Auswärtigen Amt',
                logoUrl: 'assets/img/akademischesauslandsamt.jpg',
                time: '13.00-14.00',
                room: 'Lynen Zimmer, Harnack-Haus'
            },
            {
                name: 'Frank Wittmann, Manuel Gath, Safi Sabuni, Vanessa Debiais-Sainton',
                topic: 'Panel discussion: Stranger to Friends - Three Decades of Erasmus Mobility',
                logoUrl: 'assets/img/mobilityfair.png',
                time: '14.00-15.00',
                room: 'Max-Kade-Auditorium, Henry-Ford-Bau'
            },
            {
                name: 'Savedroid',
                topic: 'Am I the born entrepreneur? Motivation, skills & how to quickly build a cool product without any money',
                logoUrl: 'assets/img/savedroid.png',
                time: '15.00-16.00',
                room: 'Lynen Zimmer, Harnack-Haus'
            },
            {
                name: 'InterExchange',
                topic: 'J-1 Visa Sponsorship for U.S. Internships',
                logoUrl: 'assets/img/interexchange.png',
                description: `<p>Please join us for an information session about how to do a professional internship in the United States. We will discuss and answer your questions about: internships/stages/training programs in the U.S., determining your eligibility, the visa you will need and how to apply.</p>
                     <p>InterExchange Intern USA is a cultural exchange program that enables university students and recent graduates from around the world to elevate their careers with professional-level internships in the United States for up to 12 months. InterExchange is designated to sponsor a variety of J-1 Visa Exchange Visitor programs and is the exclusive ESN partner for J-1 Visa sponsorship of U.S. internships.</p>
                    `,
                time: '15.00-16.00',
                room: 'Mozart Zimmer, Harnack-Haus'
            },
            {
                name: 'AEGEE, ESN, Arbeitsgruppe Wirtschaftsingenieure e.V., AIESEC',
                topic: 'Ask me Anything - ehrenamtliches Engagement',
                logoUrl: '',
                time: '16.00-17.00',
                room: 'Lynen Zimmer, Harnack-Haus'
            },


            // {
            //     name: 'ESA',
            //     topic: 'Space telescope to measure Dark Matter and Dark Energy and ESA',
            //     logoUrl: 'assets/img/esa.png'
            // },

            // {
            //     name: 'MyLike',
            //     topic: 'MyLike App World',
            //     logoUrl: 'assets/img/MyLike.png'
            // },



        ];
    }

    showMore(speaker: ISpeeches) {
        let alert = this.alert.create({
            title: 'Description',
            message: speaker.description,
            buttons: ['OK']
        });
        alert.present();
    }

    ionViewDidLoad() {
    }

    public isSmallScreen() {
        return !this.plt.is('tablet') && !this.plt.is('core');
    }


}

interface ISpeeches {
    name: string,
    topic: string,
    logoUrl?: string,
    room: string,
    time: string
    description?: string,
}
