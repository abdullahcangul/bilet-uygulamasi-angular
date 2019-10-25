import { SeferRequest } from './SeferRequest';

export class Havalimani {
    id:number;
    isim:string;
    adres:string;
    sehir:string;

    
    kalkishavalimaniSeferleri:SeferRequest[];
    inishavalimaniSeferleri:SeferRequest[];
}