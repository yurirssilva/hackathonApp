import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
declare var google: any;
const { Geolocation } = Plugins;

@Component({
    selector: 'app-desenhar-mapa',
    templateUrl: './desenhar-mapa.page.html',
    styleUrls: ['./desenhar-mapa.page.scss'],
})

export class DesenharMapaPage implements OnInit {
    @ViewChild('mapa', { static: false }) mapElement: ElementRef;
    map: any;
    mapOptions: any;
    location = { lat: null, lng: null };
    markerOptions: any = { position: null, map: null, title: null };
    marker: any;
    drawingManager;
    polygons = [];
    markers = []
    polygon;

    public selecionaArea = false;
    public area_cadastrada = false;
    public area = {};

    apiKey: any = 'AIzaSyCgg2Kpn7r6ujoFfZb4f5Y-q6Zdn59u3RE'

    desenhando = false

    concluir = false

    constructor(
        public modalController: ModalController
    ) {
        const script = document.createElement('script');
        script.id = 'googleMap';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&libraries=drawing';
        document.head.appendChild(script);
        this.getCurrentPosition().then(position => {
            console.log('positon ==> ', position);

            this.location.lat = position.coords.latitude;
            this.location.lng = position.coords.longitude;
        });
        /*Map options*/
        this.mapOptions = {
            center: this.location,
            zoom: 21,
            mapTypeControl: false,
            mapTypeId: 'hybrid'
        };
        setTimeout(() => {
            this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
            /*Marker Options*/
            this.markerOptions.position = this.location;
            this.markerOptions.map = this.map;
            this.markerOptions.title = 'Localização Atual';
            this.marker = new google.maps.Marker(this.markerOptions);
        }, 500);
    }

    getCurrentPosition() {
        return new Promise<any>(async done => {
            const coordinates = await Geolocation.getCurrentPosition();
            console.log('Current', coordinates);
            done(coordinates)
        })
    }

    ngOnInit() {
    }

    desenharArea() {
        this.desenhando = true

        this.polygons = [];
        this.polygon = null;
        this.selecionaArea = false;
        //this.events.publish("remove-polygon", true);

        this.selecionaArea = true;
        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControl: false,
            polygonOptions: {
                fillColor: '#000000',
                strokeColor: '#fc6300',
                fillOpacity: 0.2,
                strokeWeight: 2,
                clickable: false,
                editable: false,
                zIndex: 1
            }
        });
        this.drawingManager.setMap(this.map);

        this.polygon = google.maps.event.addDomListener(this.drawingManager, 'polygoncomplete', polygon => {
            this.concluir = true
            this.polygons = [];
            this.polygons.push(polygon);

            var centroid = this.calculaPolyCentroid(polygon);


            if (centroid[0] && centroid[1]) {
                this.area['coordenadas_centrais'] = {
                    lat: '',
                    lng: ''
                }
                this.area['coordenadas_centrais'].lat = centroid[0];
                this.area['coordenadas_centrais']["lng"] = centroid[1];
            }

            var polygonBounds = polygon.getPath();
            var coordinates = [];
            var coordinatesArea = [];
            // var markers = [];

            //Inclue posicao central do mapa
            var posicaoCentral = new google.maps.LatLng(centroid[0], centroid[1]);
            var markerCental = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: posicaoCentral,
                icon: { origin: new google.maps.Point(0, 0), scaledSize: new google.maps.Size(22, 40) }
            });
            this.markers.push(markerCental);

            // this.events.publish("bloquear-desenho");

            for (var i = 0; i < polygonBounds.length; i++) {
                coordinates.push(polygonBounds.getAt(i).lat(), polygonBounds.getAt(i).lng());
                coordinatesArea.push(new google.maps.LatLng(polygonBounds.getAt(i).lat(), polygonBounds.getAt(i).lng()))
                // var posicao = new google.maps.LatLng(polygonBounds.getAt(i).lat(), polygonBounds.getAt(i).lng());
                // var marker = new google.maps.Marker({
                //     map: this.map,
                //     animation: google.maps.Animation.DROP,
                //     position: posicao,
                //     icon: { url: "/assets/imgs/pin.png", origin: new google.maps.Point(0, 0), scaledSize: new google.maps.Size(22, 40) }
                // });
                // markers.push(marker);
            }

            this.area['tamanho'] = (google.maps.geometry.spherical.computeArea(coordinatesArea) * 0.00010000).toFixed(2)
            this.area['area'] = coordinates;


            for (var j = 0; j < this.markers.length; j++) {
                this.markers[j].setMap(this.map);
            }

            // this.events.subscribe("remove-polygon", data => {
            //     polygon.setMap(null);
            //     for (var i = 0; i < markers.length; i++) {
            //         markers[i].setMap(null);
            //     }
            //     markers = [];

            //     // for( let area of this.areas_criadas ){
            //     //     this.carregaOutrasAreas(area);
            //     // }
            // });


        });
    }

    calculaPolyCentroid(poly) {
        var lowx,
            highx,
            lowy,
            highy,
            lats = [],
            lngs = [],
            center_x,
            center_y,
            vertices = poly.getPath();

        for (var i = 0; i < vertices.length; i++) {
            lngs.push(vertices.getAt(i).lng());
            lats.push(vertices.getAt(i).lat());
        }

        lats.sort();
        lngs.sort();
        lowx = lats[0];
        highx = lats[vertices.length - 1];
        lowy = lngs[0];
        highy = lngs[vertices.length - 1];
        center_x = lowx + ((highx - lowx) / 2);
        center_y = lowy + ((highy - lowy) / 2);
        return ([center_x, center_y]);
    }

    async dismiss() {
        this.modalController.dismiss(this.area)
    }

    limpar() {
        this.desenhando = false
        this.concluir = false
        this.polygons[0].setMap(null)
        for(let marker of this.markers)
            marker.setMap(null)
        // this.polygon = null;
        this.polygons = [];
        this.area = {};
    }
}
