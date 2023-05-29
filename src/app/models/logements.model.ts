export class Logements {
    id: number;
    adresse: string;
    codePostal: string;
    ville: string;
    prixAchat: number;
    mensualiteEmprunt: number;
    prixLoyer: number;
    dateDebutEmprunt: Date;
    dateFinEmprunt: Date;
    locataire: number;
    statutLocation: boolean;
  
    constructor(
      id: number,
      adresse: string,
      codePostal: string,
      ville: string,
      prixAchat: number,
      mensualiteEmprunt: number,
      prixLoyer: number,
      dateDebutEmprunt: Date,
      dateFinEmprunt: Date,
      locataire: number,
      statutLocationut: boolean
    ) {
      this.id = id;
      this.adresse = adresse;
      this.codePostal = codePostal;
      this.ville = ville;
      this.prixAchat = prixAchat;
      this.mensualiteEmprunt = mensualiteEmprunt;
      this.prixLoyer = prixLoyer;
      this.dateDebutEmprunt = dateDebutEmprunt;
      this.dateFinEmprunt = dateFinEmprunt;
      this.locataire = locataire;
      this.statutLocation = statutLocationut;
    }
  }
  